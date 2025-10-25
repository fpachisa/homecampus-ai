import { useState } from 'react';

const ProblemSolvingVenn = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);

  // Survey problem diagram component
  const SurveyDiagram = ({
    leftOnly,
    both,
    rightOnly,
    neither,
    leftLabel,
    rightLabel
  }: {
    leftOnly: number;
    both: number;
    rightOnly: number;
    neither: number;
    leftLabel: string;
    rightLabel: string;
  }) => (
    <svg width="500" height="320" className="mx-auto">
      {/* Universal set */}
      <rect x="20" y="20" width="460" height="280" fill="#f0f9ff" stroke="#0369a1" strokeWidth="3" rx="10" />
      <text x="30" y="45" className="text-xl font-bold fill-blue-700">U</text>

      {/* Left circle */}
      <circle cx="180" cy="160" r="90" fill="#dbeafe" stroke="#1e40af" strokeWidth="3" opacity="0.7" />
      <text x="120" y="120" className="text-base font-bold fill-blue-900">{leftLabel}</text>

      {/* Right circle */}
      <circle cx="300" cy="160" r="90" fill="#fecaca" stroke="#dc2626" strokeWidth="3" opacity="0.7" />
      <text x="340" y="120" className="text-base font-bold fill-red-900">{rightLabel}</text>

      {/* Numbers in regions with circles */}
      <circle cx="140" cy="160" r="24" fill="white" stroke="#1e40af" strokeWidth="2" />
      <text x={leftOnly > 9 ? 131 : 135} y="168" className="text-xl font-bold fill-blue-900">{leftOnly}</text>

      <circle cx="240" cy="160" r="24" fill="white" stroke="#16a34a" strokeWidth="2" />
      <text x={both > 9 ? 231 : 235} y="168" className="text-xl font-bold fill-green-900">{both}</text>

      <circle cx="340" cy="160" r="24" fill="white" stroke="#dc2626" strokeWidth="2" />
      <text x={rightOnly > 9 ? 331 : 335} y="168" className="text-xl font-bold fill-red-900">{rightOnly}</text>

      <circle cx="420" cy="270" r="24" fill="white" stroke="#666" strokeWidth="2" />
      <text x={neither > 9 ? 411 : 415} y="278" className="text-xl font-bold fill-gray-700">{neither}</text>
    </svg>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Problem Solving with Venn Diagrams</h1>
        <p className="text-lg">Using Venn diagrams to solve real-world survey problems</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Introduction */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-800">1. Real-World Applications</h2>

          <div className="bg-fuchsia-50 p-6 rounded-lg border-l-4 border-fuchsia-500 mb-4">
            <h3 className="font-bold text-lg mb-3">Why Venn Diagrams?</h3>
            <p className="mb-3">
              By considering the number of elements in different regions, we can use Venn diagrams
              to solve <strong>real-world problems</strong> involving surveys, preferences, and classifications.
            </p>
            <p className="text-sm">
              Common scenarios: sports participation, language speakers, food preferences, activity surveys
            </p>
          </div>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <h3 className="font-bold mb-3">Key Strategy:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li><strong>Define the universal set:</strong> Total people surveyed</li>
              <li><strong>Identify the two (or three) categories:</strong> What are we comparing?</li>
              <li><strong>Start with the intersection:</strong> How many like/do BOTH?</li>
              <li><strong>Fill in exclusive regions:</strong> How many like ONLY one category?</li>
              <li><strong>Find "neither" region:</strong> Total - (all in union)</li>
              <li><strong>Answer the question:</strong> Use the diagram to extract specific information</li>
            </ol>
          </div>
        </div>

        {/* Section 2: Two-Activity Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-800">2. Two-Activity Survey Problems</h2>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 mb-4">
            <h3 className="font-bold text-lg mb-3">Example Problem Setup:</h3>
            <p className="text-sm mb-3">
              "In a survey at a resort, guests were asked whether they went <strong>sailing (S)</strong> or
              <strong> fishing (F)</strong> during their stay."
            </p>
            <p className="text-sm">
              Determine the number of guests who:
            </p>
            <ul className="list-disc list-inside text-sm ml-4 mt-2 space-y-1">
              <li>a) were surveyed</li>
              <li>b) did both activities</li>
              <li>c) did neither activity</li>
              <li>d) did exactly one of the activities</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-3 text-center">Typical Survey Diagram:</p>
            <SurveyDiagram
              leftOnly={27}
              both={9}
              rightOnly={15}
              neither={24}
              leftLabel="S"
              rightLabel="F"
            />
            <div className="mt-4 bg-white p-4 rounded">
              <p className="font-semibold mb-2">Reading the diagram:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>a) Total surveyed:</strong> 27 + 9 + 15 + 24 = <span className="font-bold text-fuchsia-600">75 guests</span></li>
                <li><strong>b) Both activities:</strong> <span className="font-bold text-green-600">9 guests</span></li>
                <li><strong>c) Neither activity:</strong> <span className="font-bold text-gray-600">24 guests</span></li>
                <li><strong>d) Exactly one:</strong> 27 + 15 = <span className="font-bold text-blue-600">42 guests</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Step-by-Step Method */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-800">3. Step-by-Step Problem Solving</h2>

          <div className="bg-white p-6 rounded border-2 border-gray-300">
            <h3 className="font-bold mb-3">General Method for Two-Set Problems:</h3>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">Step 1: Set up the diagram</p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>Draw rectangle for universal set (total surveyed)</li>
                  <li>Draw two overlapping circles for the two categories</li>
                  <li>Label each circle appropriately</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">Step 2: Fill in the intersection FIRST</p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>Look for "both", "and", or "overlap" information</li>
                  <li>Write this number in the middle region</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">Step 3: Calculate exclusive regions</p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>A only = Total in A - (A and B)</li>
                  <li>B only = Total in B - (A and B)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">Step 4: Find "neither" region</p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>Neither = Total - (A only + both + B only)</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">Step 5: Answer specific questions</p>
                <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                  <li>Use the completed diagram to extract required information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-800">Worked Examples</h2>

          <div className="space-y-4">
            <button
              onClick={() => setShowExample1(!showExample1)}
              className="w-full text-left p-4 bg-fuchsia-100 rounded-lg font-semibold hover:bg-fuchsia-200 transition"
            >
              {showExample1 ? '▼' : '▶'} Example 1: Cricket Survey
            </button>

            {showExample1 && (
              <div className="p-6 bg-white rounded border-l-4 border-fuchsia-500">
                <p className="font-semibold mb-3">
                  Tess played 22 cricket games last season. She batted in 17 of the games, and bowled in 11 of the games.
                  In 8 games she both batted and bowled.
                </p>
                <p className="mb-4">
                  a) Draw a Venn diagram to display this information.<br />
                  b) In how many games did Tess: <strong>i)</strong> bowl but not bat? <strong>ii)</strong> neither bat nor bowl?
                </p>

                <div className="bg-gray-50 p-4 rounded space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Step 1: Identify information</p>
                    <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                      <li>Total games: 22</li>
                      <li>Batted: 17</li>
                      <li>Bowled: 11</li>
                      <li>Both: 8</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 2: Calculate regions</p>
                    <div className="text-sm ml-4 space-y-1">
                      <p>• Both batted and bowled: <strong>8</strong></p>
                      <p>• Batted only: 17 - 8 = <strong>9</strong></p>
                      <p>• Bowled only: 11 - 8 = <strong>3</strong></p>
                      <p>• Neither: 22 - (9 + 8 + 3) = <strong>2</strong></p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-3">a) Venn Diagram:</p>
                    <SurveyDiagram
                      leftOnly={9}
                      both={8}
                      rightOnly={3}
                      neither={2}
                      leftLabel="Bat"
                      rightLabel="Bowl"
                    />
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-sm mb-2">b) Answers:</p>
                    <p className="text-sm"><strong>i)</strong> Bowl but not bat: <span className="font-bold text-fuchsia-600">3 games</span></p>
                    <p className="text-sm"><strong>ii)</strong> Neither bat nor bowl: <span className="font-bold text-fuchsia-600">2 games</span></p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample2(!showExample2)}
              className="w-full text-left p-4 bg-fuchsia-100 rounded-lg font-semibold hover:bg-fuchsia-200 transition"
            >
              {showExample2 ? '▼' : '▶'} Example 2: Fruit Preferences
            </button>

            {showExample2 && (
              <div className="p-6 bg-white rounded border-l-4 border-fuchsia-500">
                <p className="font-semibold mb-3">
                  In a class of 40 students, 27 like bananas, 22 like pineapples, and 17 like both fruits.
                  Find the number of students who:
                </p>
                <p className="mb-4">
                  a) dislike both fruits<br />
                  b) like exactly one fruit
                </p>

                <div className="bg-gray-50 p-4 rounded space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Step 1: Set up</p>
                    <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                      <li>U = 40 students</li>
                      <li>B (bananas) = 27</li>
                      <li>P (pineapples) = 22</li>
                      <li>Both = 17</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 2: Calculate regions</p>
                    <div className="text-sm ml-4 space-y-1">
                      <p>• Both fruits: <strong>17</strong></p>
                      <p>• Bananas only: 27 - 17 = <strong>10</strong></p>
                      <p>• Pineapples only: 22 - 17 = <strong>5</strong></p>
                      <p>• Neither: 40 - (10 + 17 + 5) = <strong>8</strong></p>
                    </div>
                  </div>

                  <div>
                    <SurveyDiagram
                      leftOnly={10}
                      both={17}
                      rightOnly={5}
                      neither={8}
                      leftLabel="B"
                      rightLabel="P"
                    />
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Answers:</p>
                    <p className="text-sm">a) Dislike both fruits: <span className="font-bold text-fuchsia-600">8 students</span></p>
                    <p className="text-sm">b) Like exactly one fruit: 10 + 5 = <span className="font-bold text-fuchsia-600">15 students</span></p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowExample3(!showExample3)}
              className="w-full text-left p-4 bg-fuchsia-100 rounded-lg font-semibold hover:bg-fuchsia-200 transition"
            >
              {showExample3 ? '▼' : '▶'} Example 3: Service Club Problem
            </button>

            {showExample3 && (
              <div className="p-6 bg-white rounded border-l-4 border-fuchsia-500">
                <p className="font-semibold mb-3">
                  A service club has 65 members. 38 members attend the Monday meetings, 35 attend the Thursday meetings,
                  and 19 attend neither meeting.
                </p>
                <p className="mb-4">How many members attend: a) both meetings? b) only the Monday meetings?</p>

                <div className="bg-gray-50 p-4 rounded space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Step 1: Identify what we know</p>
                    <ul className="list-disc list-inside text-sm ml-4 space-y-1">
                      <li>Total members: 65</li>
                      <li>Monday (M): 38</li>
                      <li>Thursday (T): 35</li>
                      <li>Neither: 19</li>
                      <li>Both: ? (unknown - we need to find this!)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 2: Find "both" using total</p>
                    <div className="text-sm ml-4 space-y-2">
                      <p>Members attending at least one meeting = Total - Neither</p>
                      <p className="font-mono">n(M ∪ T) = 65 - 19 = 46</p>
                      <p className="mt-2">Using cardinality formula:</p>
                      <p className="font-mono">n(M ∪ T) = n(M) + n(T) - n(M ∩ T)</p>
                      <p className="font-mono">46 = 38 + 35 - n(M ∩ T)</p>
                      <p className="font-mono">n(M ∩ T) = 73 - 46 = 27</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Step 3: Calculate other regions</p>
                    <div className="text-sm ml-4 space-y-1">
                      <p>• Both meetings: <strong>27</strong></p>
                      <p>• Monday only: 38 - 27 = <strong>11</strong></p>
                      <p>• Thursday only: 35 - 27 = <strong>8</strong></p>
                      <p>• Neither: <strong>19</strong></p>
                    </div>
                  </div>

                  <div>
                    <SurveyDiagram
                      leftOnly={11}
                      both={27}
                      rightOnly={8}
                      neither={19}
                      leftLabel="M"
                      rightLabel="T"
                    />
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-sm mb-2">Answers:</p>
                    <p className="text-sm">a) Both meetings: <span className="font-bold text-fuchsia-600">27 members</span></p>
                    <p className="text-sm">b) Only Monday meetings: <span className="font-bold text-fuchsia-600">11 members</span></p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded mt-3">
                    <p className="text-xs"><strong>Verification:</strong> 11 + 27 + 8 + 19 = 65 ✓</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Problems */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-fuchsia-800">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                1. At a resort, 26 teenagers were surveyed about activities. 20 like going to the cinema, 19 like ice-skating,
                and 1 likes neither activity. How many teenagers like both activities?
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">At least one activity: 26 - 1 = 25</p>
                  <p className="text-sm">Using formula: n(C ∪ I) = n(C) + n(I) - n(C ∩ I)</p>
                  <p className="font-mono text-sm">25 = 20 + 19 - n(C ∩ I)</p>
                  <p className="font-mono text-sm">n(C ∩ I) = 39 - 25 = <strong>14 teenagers</strong></p>
                </div>
              </details>
            </div>

            <div className="p-4 bg-white rounded border-2 border-gray-300">
              <p className="font-semibold mb-2">
                2. There are 42 children at a childcare center. 15 have fair hair (F), 12 have blue eyes (B), and 22 have neither
                fair hair nor blue eyes. Find the number of children with fair hair but not blue eyes.
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600 hover:underline">Show Solution</summary>
                <div className="mt-2 p-3 bg-gray-50 rounded space-y-2">
                  <p className="text-sm">With at least one feature: 42 - 22 = 20</p>
                  <p className="text-sm">Using formula: n(F ∪ B) = n(F) + n(B) - n(F ∩ B)</p>
                  <p className="font-mono text-sm">20 = 15 + 12 - n(F ∩ B)</p>
                  <p className="font-mono text-sm">n(F ∩ B) = 27 - 20 = 7</p>
                  <p className="text-sm mt-2">Fair hair but not blue eyes: 15 - 7 = <strong>8 children</strong></p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Always start with the intersection</strong> (both/and region) when filling in diagrams</li>
            <li>Use <strong>cardinality formula:</strong> n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</li>
            <li>"Neither" region = Total - (all in union)</li>
            <li>"Exactly one" = (A only) + (B only) = exclude the intersection</li>
            <li>"At least one" = Total - Neither = n(A ∪ B)</li>
            <li><strong>Verify your answer:</strong> All regions should add up to the total</li>
            <li>Draw neat diagrams with clear labels</li>
            <li>Read questions carefully: "both", "only", "neither", "exactly one" all mean different things!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingVenn;
