import { useState } from 'react';

const Introduction = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Introduction to Data & Collection</h1>
        <p className="mt-2 text-purple-100">Understanding what data is and how we collect it for analysis</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-b-lg space-y-8">

        {/* Section 1: What is Statistics and Data? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            1. What is Statistics and Data?
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Statistics</strong> is the branch of mathematics that involves four main processes:
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Collecting data</strong> - Gathering information through various methods</li>
                <li><strong>Organizing data</strong> - Arranging information in a structured way</li>
                <li><strong>Representing data</strong> - Displaying information using diagrams and graphs</li>
                <li><strong>Analyzing data</strong> - Interpreting information to draw conclusions</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Data</strong> is information collected for analysis. Data can be numbers, facts, or observations about the world around us.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Definition:</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Raw data</strong> is data collected in a survey that has not been organized yet. It can be massive and messy, making it difficult to understand without proper organization.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 1: Identifying Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Which of the following are examples of data that could be collected and analyzed?
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>The heights of students in your class</li>
              <li>Favorite ice cream flavors in a survey</li>
              <li>Daily temperatures in Singapore for a month</li>
              <li>Number of goals scored by a football team each game</li>
            </ul>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
              <p className="text-gray-700 dark:text-gray-300">
                All of these are examples of data! Each represents information that can be collected, organized, and analyzed:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                <li>Heights - numerical data (e.g., 165 cm, 170 cm)</li>
                <li>Ice cream flavors - categorical data (chocolate, vanilla, strawberry)</li>
                <li>Temperatures - numerical data that changes over time</li>
                <li>Goals scored - numerical data showing performance</li>
              </ul>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 1: Understanding Raw Data
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A teacher asked 20 students how many hours they spent on homework last week. The responses (in hours) were:
              5, 8, 6, 10, 7, 5, 9, 8, 6, 7, 8, 5, 9, 10, 6, 7, 8, 6, 9, 7
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Is this raw data or organized data? Explain why.
            </p>
            <button
              onClick={() => setShowSolution1(!showSolution1)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution1 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution1 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300">
                  This is <strong>raw data</strong> because the numbers are listed in the order they were collected, with no organization or structure.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  To make it easier to understand, we would need to organize it (for example, by counting how many students spent 5 hours, 6 hours, etc., or by arranging the numbers in order).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Four Methods of Data Collection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            2. Four Methods of Data Collection
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              There are four main methods we can use to collect data:
            </p>

            {/* Method 1 */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                1. Conducting Experiments
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Testing or trying something to gather data. For example, measuring how far a ball travels when thrown at different angles, or testing plant growth under different conditions.
              </p>
            </div>

            {/* Method 2 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                2. Conducting Surveys
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Asking people questions to gather their responses. For example, asking classmates about their favorite subjects, or surveying customers about product satisfaction.
              </p>
            </div>

            {/* Method 3 */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-4">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                3. Observing Outcomes
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Watching and recording what happens naturally without interfering. For example, counting cars passing through an intersection, or observing bird species at a park.
              </p>
            </div>

            {/* Method 4 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded mb-4">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">
                4. Searching Statistical Data
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Finding data that has already been collected and published by others. For example, looking up population data from government websites, or historical weather records.
              </p>
            </div>
          </div>

          {/* Worked example */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Example 2: Choosing a Collection Method
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              For each scenario, identify the most appropriate data collection method:
            </p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Scenario A:</strong> You want to know how many students in your school prefer online learning versus classroom learning.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Best method:</strong> Conducting a <strong>survey</strong></p>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic mb-4">You need to ask students their preferences.</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Scenario B:</strong> You want to find out Singapore's population in the year 2020.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Best method:</strong> Searching <strong>statistical data</strong></p>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic mb-4">This information is already available from official sources.</p>

              <p className="text-gray-700 dark:text-gray-300 mb-3"><strong>Scenario C:</strong> You want to determine which paper airplane design flies the farthest.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Best method:</strong> Conducting an <strong>experiment</strong></p>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">You need to test different designs and measure distances.</p>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 2: Matching Collection Methods
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Match each data collection goal with the most appropriate method:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-3">
              <li>Finding out how many students arrive late to school each week</li>
              <li>Testing whether music helps students concentrate better while studying</li>
              <li>Learning what Singapore's average rainfall was last year</li>
              <li>Discovering students' favorite lunch options</li>
            </ol>
            <button
              onClick={() => setShowSolution2(!showSolution2)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution2 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution2 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li><strong>Observing outcomes</strong> - Count and record lateness as it happens naturally</li>
                  <li><strong>Conducting an experiment</strong> - Test students with and without music to compare results</li>
                  <li><strong>Searching statistical data</strong> - This information is available from weather authorities</li>
                  <li><strong>Conducting a survey</strong> - Ask students about their lunch preferences</li>
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Real-World Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            3. Why Data Collection Matters
          </h2>

          {/* Concept explanation */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Data collection is used everywhere in the real world to make important decisions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">🏥 Healthcare</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hospitals collect patient data to track diseases, improve treatments, and plan resources.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">🏪 Business</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Companies survey customers to understand what products people want to buy.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">🌍 Environment</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Scientists observe wildlife and collect weather data to monitor climate change.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">📚 Education</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Schools analyze test scores and attendance to improve teaching methods.
                </p>
              </div>
            </div>
          </div>

          {/* Practice problem */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
              Practice 3: Design Your Own Data Collection
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              You want to find out whether students at your school would be interested in a new after-school robotics club.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              (a) Which data collection method should you use?<br />
              (b) Write three questions you would ask to gather useful data.<br />
              (c) Why is collecting this data important before starting the club?
            </p>
            <button
              onClick={() => setShowSolution3(!showSolution3)}
              className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
            >
              {showSolution3 ? 'Hide' : 'Show'} Solution
            </button>
            {showSolution3 && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Solution:</strong></p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>(a)</strong> Use a <strong>survey</strong> to ask students about their interest.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>(b)</strong> Sample questions:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4 mb-3">
                  <li>Would you be interested in joining a robotics club? (Yes/No/Maybe)</li>
                  <li>How many days per week could you attend? (1, 2, 3, or more)</li>
                  <li>What time would work best for you? (Right after school / 4-5 PM / 5-6 PM)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>(c)</strong> Collecting this data is important because it helps determine if there's enough interest to justify starting the club, what schedule would work for most students, and how to plan resources (like equipment and space).
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 p-6 rounded mt-8">
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">
            Key Takeaways
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Statistics</strong> involves collecting, organizing, representing, and analyzing data</li>
            <li><strong>Data</strong> is information collected for analysis; <strong>raw data</strong> is unorganized and difficult to understand</li>
            <li>Four data collection methods: <strong>conducting experiments</strong>, <strong>conducting surveys</strong>, <strong>observing outcomes</strong>, and <strong>searching statistical data</strong></li>
            <li>Choose the collection method based on what information you need and how it can best be obtained</li>
            <li>Data collection is essential for making informed decisions in healthcare, business, environment, education, and many other fields</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Introduction;
