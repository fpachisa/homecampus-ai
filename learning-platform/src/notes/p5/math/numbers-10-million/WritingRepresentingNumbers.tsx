import { useState } from 'react';

const WritingRepresentingNumbers = () => {
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);
  const [showExample3, setShowExample3] = useState(false);
  const [showPractice1, setShowPractice1] = useState(false);
  const [showPractice2, setShowPractice2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Writing & Representing Numbers</h1>
        <p className="text-lg">Using number discs, converting words to numerals, and numerals to words</p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Number Discs */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">1. Number Discs</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">What are Number Discs?</h3>
            <p className="text-gray-800 dark:text-gray-200">
              Number discs are <strong>circular counters</strong> that represent different place values.
              Each disc shows its value, making it easy to see what a number is made of.
            </p>
          </div>

          {/* Visual Number Disc Example */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Number Disc Values:</h3>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-pink-200 dark:bg-pink-800 flex items-center justify-center border-4 border-pink-400 dark:border-pink-600">
                <span className="text-xs font-bold text-pink-800 dark:text-pink-200">1,000,000</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center border-4 border-purple-400 dark:border-purple-600">
                <span className="text-xs font-bold text-purple-800 dark:text-purple-200">100,000</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center border-4 border-blue-400 dark:border-blue-600">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-200">10,000</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center border-4 border-green-400 dark:border-green-600">
                <span className="text-sm font-bold text-green-800 dark:text-green-200">1,000</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center border-4 border-yellow-400 dark:border-yellow-600">
                <span className="text-sm font-bold text-yellow-800 dark:text-yellow-200">100</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-orange-200 dark:bg-orange-800 flex items-center justify-center border-4 border-orange-400 dark:border-orange-600">
                <span className="text-lg font-bold text-orange-800 dark:text-orange-200">10</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center border-4 border-red-400 dark:border-red-600">
                <span className="text-lg font-bold text-red-800 dark:text-red-200">1</span>
              </div>
            </div>
          </div>

          {/* Example with Number Discs */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-4">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Example: Showing 3,254,132 with Number Discs</h3>

            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {/* Headers */}
              <div className="text-xs font-bold text-pink-600 dark:text-pink-400">Millions</div>
              <div className="text-xs font-bold text-purple-600 dark:text-purple-400">100,000s</div>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400">10,000s</div>
              <div className="text-xs font-bold text-green-600 dark:text-green-400">1,000s</div>
              <div className="text-xs font-bold text-yellow-600 dark:text-yellow-400">100s</div>
              <div className="text-xs font-bold text-orange-600 dark:text-orange-400">10s</div>
              <div className="text-xs font-bold text-red-600 dark:text-red-400">1s</div>

              {/* Disc columns */}
              <div className="flex flex-col items-center gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-pink-200 dark:bg-pink-800 flex items-center justify-center border-2 border-pink-400 dark:border-pink-600">
                    <span className="text-[8px] font-bold text-pink-800 dark:text-pink-200">1M</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                {[1, 2].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center border-2 border-purple-400 dark:border-purple-600">
                    <span className="text-[8px] font-bold text-purple-800 dark:text-purple-200">100K</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center border-2 border-blue-400 dark:border-blue-600">
                    <span className="text-[8px] font-bold text-blue-800 dark:text-blue-200">10K</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center border-2 border-green-400 dark:border-green-600">
                    <span className="text-[8px] font-bold text-green-800 dark:text-green-200">1K</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-yellow-200 dark:bg-yellow-800 flex items-center justify-center border-2 border-yellow-400 dark:border-yellow-600">
                  <span className="text-[8px] font-bold text-yellow-800 dark:text-yellow-200">100</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-orange-200 dark:bg-orange-800 flex items-center justify-center border-2 border-orange-400 dark:border-orange-600">
                    <span className="text-xs font-bold text-orange-800 dark:text-orange-200">10</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-1">
                {[1, 2].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center border-2 border-red-400 dark:border-red-600">
                    <span className="text-xs font-bold text-red-800 dark:text-red-200">1</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded border border-green-300 dark:border-green-600">
              <p className="text-gray-900 dark:text-gray-100">
                <strong>Counting:</strong> 3 millions + 2 hundred thousands + 5 ten thousands + 4 thousands + 1 hundred + 3 tens + 2 ones = <strong>3,254,132</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Words to Numerals */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">2. Converting Words to Numerals</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Steps to Convert Words to Numbers:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Listen for <strong>"million"</strong> - write that number followed by 6 zeros (or keep the rest of the number)</li>
              <li>Listen for <strong>"thousand"</strong> - that's the thousands part</li>
              <li>The rest is <strong>hundreds, tens, and ones</strong></li>
              <li>Fill in zeros for any missing place values!</li>
            </ol>
          </div>

          {/* Common Pitfall */}
          <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-2 border-red-300 dark:border-red-600 mb-4">
            <h3 className="font-bold text-red-700 dark:text-red-300 mb-2">⚠️ Watch Out for Zeros!</h3>
            <p className="text-gray-800 dark:text-gray-200">
              When a place value isn't mentioned, you need to put a <strong>zero</strong> there!
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Example: "Five million, three hundred" → 5,000,300 (zeros in ten thousands, thousands, tens, and ones)
            </p>
          </div>

          {/* Worked Example */}
          <button
            onClick={() => setShowExample1(!showExample1)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100 mb-4"
          >
            {showExample1 ? '▼' : '▶'} Example: "Five million, one hundred thousand, two hundred and seven"
          </button>

          {showExample1 && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400 mb-4">
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 1:</strong> "Five million" → Start with 5,_ _ _, _ _ _</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 2:</strong> "one hundred thousand" → 5,100,_ _ _</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No ten thousands mentioned, so that's already 0</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 3:</strong> "two hundred and seven" → 5,100,207</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No thousands mentioned = 0, two hundred = 2, no tens = 0, seven = 7</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded">
                  <p><strong>Answer:</strong> 5,100,207</p>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowExample2(!showExample2)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100 mb-4"
          >
            {showExample2 ? '▼' : '▶'} Example: "Nine million, two hundred and thirty thousand, three hundred and sixty-four"
          </button>

          {showExample2 && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400 mb-4">
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 1:</strong> "Nine million" → 9,_ _ _, _ _ _</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 2:</strong> "two hundred and thirty thousand" → 9,230,_ _ _</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">230 in the thousands section</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 3:</strong> "three hundred and sixty-four" → 9,230,364</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded">
                  <p><strong>Answer:</strong> 9,230,364</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 3: Numerals to Words */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">3. Converting Numerals to Words</h2>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500 dark:border-green-400 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Steps to Convert Numbers to Words:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
              <li>Split the number into groups of three from the right</li>
              <li>Read the <strong>millions group</strong> and say "million"</li>
              <li>Read the <strong>thousands group</strong> and say "thousand"</li>
              <li>Read the <strong>last three digits</strong> (hundreds, tens, ones)</li>
              <li>Skip zeros - don't say "zero hundred" or "zero thousand"</li>
            </ol>
          </div>

          <button
            onClick={() => setShowExample3(!showExample3)}
            className="w-full text-left p-4 bg-green-100 dark:bg-green-900/50 rounded-lg font-semibold hover:bg-green-200 dark:hover:bg-green-900/70 transition text-gray-900 dark:text-gray-100 mb-4"
          >
            {showExample3 ? '▼' : '▶'} Example: Write 1,503,080 in words
          </button>

          {showExample3 && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded border-l-4 border-green-500 dark:border-green-400 mb-4">
              <div className="space-y-3 text-gray-800 dark:text-gray-200">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 1:</strong> Split: 1 | 503 | 080</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">millions | thousands | ones</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 2:</strong> Millions: "One million"</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 3:</strong> Thousands: "five hundred and three thousand"</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded">
                  <p><strong>Step 4:</strong> Last three (080): "and eighty"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Skip the zero hundreds, just say "eighty"</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded">
                  <p><strong>Answer:</strong> One million, five hundred and three thousand and eighty</p>
                </div>
              </div>
            </div>
          )}

          {/* Quick Reference */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded border-2 border-blue-300 dark:border-blue-600 mb-4">
            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Quick Reference - Number Words:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">1-9:</p>
                <p className="text-gray-900 dark:text-gray-100">one, two, three...</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">10-19:</p>
                <p className="text-gray-900 dark:text-gray-100">ten, eleven, twelve...</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">20, 30, 40...</p>
                <p className="text-gray-900 dark:text-gray-100">twenty, thirty, forty...</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">100s:</p>
                <p className="text-gray-900 dark:text-gray-100">[number] hundred</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Practice Problems</h2>

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                1. Write these in numerals:
              </p>
              <div className="ml-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>a) Three million, four hundred and fifty thousand, six hundred and twelve</p>
                <p>b) Seven million, eight thousand and three</p>
                <p>c) Two million, five hundred</p>
              </div>
              <button
                onClick={() => setShowPractice1(!showPractice1)}
                className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded transition-colors"
              >
                {showPractice1 ? 'Hide' : 'Show'} Solutions
              </button>
              {showPractice1 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-1 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> 3,450,612</p>
                  <p><strong>b)</strong> 7,008,003</p>
                  <p><strong>c)</strong> 2,000,500</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded border-2 border-gray-300 dark:border-gray-600">
              <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                2. Write these in words:
              </p>
              <div className="ml-4 space-y-1 text-sm text-gray-800 dark:text-gray-200">
                <p>a) 4,672,100</p>
                <p>b) 8,005,040</p>
                <p>c) 3,900,009</p>
              </div>
              <button
                onClick={() => setShowPractice2(!showPractice2)}
                className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded transition-colors"
              >
                {showPractice2 ? 'Hide' : 'Show'} Solutions
              </button>
              {showPractice2 && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded space-y-2 text-sm text-gray-800 dark:text-gray-200">
                  <p><strong>a)</strong> Four million, six hundred and seventy-two thousand, one hundred</p>
                  <p><strong>b)</strong> Eight million, five thousand and forty</p>
                  <p><strong>c)</strong> Three million, nine hundred thousand and nine</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Number discs</strong> are visual tools to show place values</li>
            <li>Count discs in each column and add up their values</li>
            <li>When converting words to numerals, <strong>don't forget zeros</strong> for missing place values</li>
            <li>When converting numerals to words, <strong>skip zeros</strong> - don't say "zero hundred"</li>
            <li>Split large numbers into groups of three from the right: millions | thousands | ones</li>
            <li>Use "and" before the tens and ones (e.g., "three hundred <strong>and</strong> forty-five")</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WritingRepresentingNumbers;
