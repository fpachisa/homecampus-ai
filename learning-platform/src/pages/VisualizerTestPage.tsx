/**
 * Visualizer Testing Lab
 *
 * Development tool for testing all math visualizers with AI-generated questions.
 * Allows selecting any visualizer and having real AI generate a test question that uses it.
 */

import { useState } from 'react';
import { getAllToolNames, getToolDefinition } from '../components/math-tools/mathToolsRegistry';
import { MathToolRenderer } from '../components/practice/MathToolRenderer';
import { getFallbackAIService } from '../services/fallbackAIService';

interface GeneratedTest {
  questionText: string;
  mathTool: {
    toolName: string;
    parameters: Record<string, any>;
    caption: string;
  };
  rawResponse?: string;
}

export const VisualizerTestPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string>('');
  const [generatedTest, setGeneratedTest] = useState<GeneratedTest | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDebug, setShowDebug] = useState(false);

  // Group tools by category
  const toolsByCategory = getAllToolNames().reduce((acc, toolName) => {
    const tool = getToolDefinition(toolName);
    if (tool) {
      if (!acc[tool.category]) {
        acc[tool.category] = [];
      }
      acc[tool.category].push(toolName);
    }
    return acc;
  }, {} as Record<string, string[]>);

  const selectedToolDef = selectedTool ? getToolDefinition(selectedTool) : null;

  const handleGenerateTest = async () => {
    if (!selectedTool) {
      setError('Please select a visualizer first');
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedTest(null);

    try {
      const toolDef = getToolDefinition(selectedTool);
      if (!toolDef) {
        throw new Error('Tool definition not found');
      }

      // Create prompt for AI to generate a test question
      const prompt = `You are testing the "${toolDef.name}" visualizer.

**Tool Definition:**
Name: ${toolDef.name}
Technical Name: ${toolDef.technicalName}
Category: ${toolDef.category}
Description: ${toolDef.description}
When to Use: ${toolDef.whenToUse}

**Parameters:**
${JSON.stringify(toolDef.parameters, null, 2)}

**Example Usage:**
${JSON.stringify(toolDef.exampleUsage, null, 2)}

**Your Task:**
Generate ONE realistic practice question that would require this specific visualizer. The question should:
1. Be educationally appropriate for ${toolDef.category} topics
2. Use realistic parameter values from the parameter specifications
3. Be solvable by a student
4. Make effective use of the visualization

**CRITICAL JSON FORMATTING RULES:**
1. Return ONLY valid JSON (no markdown, no comments)
2. Use double backslashes (\\\\) for LaTeX: "\\\\angle" not "\\angle"
3. Escape all special characters properly
4. Use plain text for angles: "110°" or "110 degrees" (avoid LaTeX in JSON strings)
5. No trailing commas

**REQUIRED FORMAT:**
{
  "questionText": "The complete question text here...",
  "mathTool": {
    "toolName": "${toolDef.technicalName}",
    "parameters": {
      // Fill with appropriate parameter values - use plain strings, no LaTeX escapes
    },
    "caption": "Brief description of what the diagram shows"
  }
}

Generate the test question now:`;

      // Call AI service
      const aiService = getFallbackAIService();
      console.log('AI Prompt:', prompt);
      const response = await aiService.generateRawCompletion(prompt);
      console.log('AI Response:', response);

      // Parse the response
      let parsedResponse: GeneratedTest;
      try {
        // Try to extract JSON from markdown code blocks if present
        const jsonMatch = response.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/);
        let jsonStr = jsonMatch ? jsonMatch[1] : response.trim();

        // Clean up common JSON issues
        // Remove comments (single line and multi-line)
        jsonStr = jsonStr.replace(/\/\/.*$/gm, '');
        jsonStr = jsonStr.replace(/\/\*[\s\S]*?\*\//g, '');

        // Remove trailing commas before closing braces/brackets
        jsonStr = jsonStr.replace(/,(\s*[}\]])/g, '$1');

        // Try to parse
        parsedResponse = JSON.parse(jsonStr);
      } catch (parseError) {
        // Store raw response for debugging
        console.error('Raw AI response:', response);
        console.error('Parse error:', parseError);
        throw new Error(`Failed to parse AI response: ${parseError instanceof Error ? parseError.message : 'Unknown error'}. Check browser console for raw response.`);
      }

      // Validate response structure
      if (!parsedResponse.questionText || !parsedResponse.mathTool) {
        throw new Error('Invalid response structure from AI');
      }

      // Store raw response for debug
      parsedResponse.rawResponse = response;

      setGeneratedTest(parsedResponse);
    } catch (err) {
      console.error('Error generating test:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate test question');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🧪 Math Visualizer Testing Lab
          </h1>
          <p className="text-gray-600">
            Test all math visualizers with AI-generated questions. Select a tool and click "Generate Test" to see it in action.
          </p>
        </div>

        {/* Tool Selection */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Visualizer
              </label>
              <select
                value={selectedTool}
                onChange={(e) => {
                  setSelectedTool(e.target.value);
                  setGeneratedTest(null);
                  setError(null);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Choose a visualizer...</option>
                {Object.entries(toolsByCategory).map(([category, tools]) => (
                  <optgroup key={category} label={category.toUpperCase()}>
                    {tools.map(toolName => {
                      const tool = getToolDefinition(toolName);
                      return (
                        <option key={toolName} value={toolName}>
                          {tool?.name || toolName}
                        </option>
                      );
                    })}
                  </optgroup>
                ))}
              </select>
            </div>

            <button
              onClick={handleGenerateTest}
              disabled={!selectedTool || loading}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                !selectedTool || loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {loading ? 'Generating...' : 'Generate Test'}
            </button>
          </div>

          {/* Tool Info */}
          {selectedToolDef && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Category:</span>
                  <span className="ml-2 text-gray-600">{selectedToolDef.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Technical Name:</span>
                  <span className="ml-2 text-gray-600 font-mono">{selectedToolDef.technicalName}</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="font-semibold text-gray-700">Description:</span>
                <p className="text-gray-600 mt-1">{selectedToolDef.description}</p>
              </div>
              <div className="mt-2">
                <span className="font-semibold text-gray-700">When to Use:</span>
                <p className="text-gray-600 mt-1">{selectedToolDef.whenToUse}</p>
              </div>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <span className="text-red-600 mr-2">❌</span>
              <div>
                <h3 className="font-semibold text-red-800">Error</h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-lg shadow-lg p-12 mb-6">
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mb-4"></div>
              <p className="text-gray-600">AI is generating a test question...</p>
            </div>
          </div>
        )}

        {/* Generated Test Display */}
        {generatedTest && !loading && (
          <div className="space-y-6">
            {/* Question */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Generated Question</h2>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-800 leading-relaxed">{generatedTest.questionText}</p>
              </div>
            </div>

            {/* Visualizer */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Rendered Visualizer</h2>
              <MathToolRenderer
                toolName={generatedTest.mathTool.toolName}
                parameters={generatedTest.mathTool.parameters}
                caption={generatedTest.mathTool.caption}
              />
            </div>

            {/* Debug Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Debug Information</h2>
                <button
                  onClick={() => setShowDebug(!showDebug)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  {showDebug ? '▼ Hide' : '▶ Show'}
                </button>
              </div>

              {showDebug && (
                <div className="space-y-4">
                  {/* Parameters */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-700">Parameters</h3>
                      <button
                        onClick={() => copyToClipboard(JSON.stringify(generatedTest.mathTool.parameters, null, 2))}
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        📋 Copy
                      </button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      {JSON.stringify(generatedTest.mathTool.parameters, null, 2)}
                    </pre>
                  </div>

                  {/* Caption */}
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Caption</h3>
                    <p className="p-3 bg-gray-50 rounded border border-gray-200">
                      {generatedTest.mathTool.caption}
                    </p>
                  </div>

                  {/* Raw Response */}
                  {generatedTest.rawResponse && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-700">Raw AI Response</h3>
                        <button
                          onClick={() => copyToClipboard(generatedTest.rawResponse || '')}
                          className="text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          📋 Copy
                        </button>
                      </div>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm max-h-64">
                        {generatedTest.rawResponse}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerateTest}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                🔄 Regenerate
              </button>
              <button
                onClick={() => {
                  setGeneratedTest(null);
                  setSelectedTool('');
                }}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                ✨ New Test
              </button>
            </div>
          </div>
        )}

        {/* Instructions (shown when no test) */}
        {!generatedTest && !loading && !error && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Test!</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a visualizer from the dropdown above and click "Generate Test" to see how AI creates
              questions using that specific visualization tool. Perfect for testing new visualizers or
              validating existing ones.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizerTestPage;
