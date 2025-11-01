/**
 * Greetings Viewer Page
 *
 * A simple test page to view and compare all initial greetings
 * (both handcrafted and AI-generated) in one place.
 *
 * Access via: http://localhost:5173/greetings-viewer
 */

import { useState } from 'react';
import { INITIAL_GREETINGS_CACHE, getCachedTopicIds } from '../data/initialGreetingsCache';
// AI-generated file removed after copying to main cache
// import { INITIAL_GREETINGS_AI_GENERATED, getAIGeneratedTopicIds } from '../data/initialGreetingsCache-ai-generated';
import { marked } from 'marked';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { MathToolRenderer } from '../components/practice/MathToolRenderer';

// Render markdown with KaTeX math
function renderContent(content: string): string {
  // First render markdown
  const html = marked.parse(content) as string;

  // Then render LaTeX math
  return html.replace(/\$([^$]+)\$/g, (match, math) => {
    try {
      return katex.renderToString(math, { throwOnError: false });
    } catch (e) {
      return match;
    }
  });
}

export default function GreetingsViewer() {
  const [viewMode, setViewMode] = useState<'handcrafted' | 'ai-generated' | 'comparison'>('handcrafted');
  const [topicFilter, setTopicFilter] = useState<string>('all');

  const handcraftedTopics = getCachedTopicIds();
  const aiGeneratedTopics: string[] = []; // AI-generated file removed
  const allTopics = Array.from(new Set([...handcraftedTopics, ...aiGeneratedTopics])).sort();

  // Extract unique topic prefixes (e.g., s3-math-trigonometry)
  const topicPrefixes = Array.from(new Set(
    allTopics.map(id => {
      const parts = id.split('-');
      if (parts.length >= 3) {
        return `${parts[0]}-${parts[1]}-${parts[2]}`; // s3-math-trigonometry
      }
      return id;
    })
  )).sort();

  // Filter topics based on selected prefix
  const filterTopics = (topics: string[]) => {
    if (topicFilter === 'all') return topics;
    return topics.filter(id => id.startsWith(topicFilter));
  };

  const filteredHandcraftedTopics = filterTopics(handcraftedTopics);
  const filteredAIGeneratedTopics = filterTopics(aiGeneratedTopics);
  const filteredAllTopics = filterTopics(allTopics);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Initial Greetings Viewer
          </h1>
          <p className="text-gray-600">
            Compare handcrafted vs AI-generated initial greetings and questions
          </p>
        </div>

        {/* Topic Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Topic:
          </label>
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Topics ({allTopics.length} subtopics)</option>
            {topicPrefixes.map(prefix => {
              const count = allTopics.filter(id => id.startsWith(prefix)).length;
              const displayName = prefix
                .split('-')
                .slice(2)
                .join(' ')
                .replace(/\b\w/g, (l: string) => l.toUpperCase());
              return (
                <option key={prefix} value={prefix}>
                  {displayName} ({count} subtopics)
                </option>
              );
            })}
          </select>
        </div>

        {/* View Mode Selector */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setViewMode('handcrafted')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'handcrafted'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Handcrafted ({filteredHandcraftedTopics.length})
          </button>
          <button
            onClick={() => setViewMode('ai-generated')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'ai-generated'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            AI-Generated ({filteredAIGeneratedTopics.length})
          </button>
          <button
            onClick={() => setViewMode('comparison')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'comparison'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Side-by-Side Comparison
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600">Handcrafted</div>
            <div className="text-2xl font-bold text-blue-600">{filteredHandcraftedTopics.length}</div>
            {topicFilter !== 'all' && (
              <div className="text-xs text-gray-500">of {handcraftedTopics.length} total</div>
            )}
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600">AI-Generated</div>
            <div className="text-2xl font-bold text-purple-600">{filteredAIGeneratedTopics.length}</div>
            {topicFilter !== 'all' && (
              <div className="text-xs text-gray-500">of {aiGeneratedTopics.length} total</div>
            )}
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600">{topicFilter === 'all' ? 'Total' : 'Filtered'}</div>
            <div className="text-2xl font-bold text-green-600">{filteredAllTopics.length}</div>
            {topicFilter !== 'all' && (
              <div className="text-xs text-gray-500">of {allTopics.length} total</div>
            )}
          </div>
        </div>

        {/* Content */}
        {viewMode === 'comparison' ? (
          <ComparisonView topics={filteredAllTopics} />
        ) : viewMode === 'handcrafted' ? (
          <SingleView topics={filteredHandcraftedTopics} cache={INITIAL_GREETINGS_CACHE} title="Handcrafted Greetings" color="blue" />
        ) : (
          <SingleView topics={filteredAIGeneratedTopics} cache={{}} title="AI-Generated Greetings (Removed)" color="purple" />
        )}
      </div>
    </div>
  );
}

function SingleView({ topics, cache, title, color }: {
  topics: string[],
  cache: Record<string, any>,
  title: string,
  color: 'blue' | 'purple'
}) {
  return (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${color === 'blue' ? 'text-blue-600' : 'text-purple-600'} mb-4`}>
        {title}
      </h2>
      {topics.map((topicId) => {
        const greeting = cache[topicId];
        if (!greeting) return null;

        return (
          <GreetingCard key={topicId} topicId={topicId} greeting={greeting} color={color} />
        );
      })}
    </div>
  );
}

function ComparisonView({ topics }: { topics: string[] }) {
  return (
    <div className="space-y-8">
      {topics.map((topicId) => {
        const handcrafted = INITIAL_GREETINGS_CACHE[topicId];
        const aiGenerated = undefined; // AI-generated file removed

        if (!handcrafted && !aiGenerated) return null;

        return (
          <div key={topicId} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              {topicId}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {/* Handcrafted */}
              <div className="border-r pr-6">
                <div className="text-sm font-semibold text-blue-600 mb-3">HANDCRAFTED</div>
                {handcrafted ? (
                  <GreetingContent greeting={handcrafted} />
                ) : (
                  <div className="text-gray-400 italic">Not available</div>
                )}
              </div>

              {/* AI-Generated */}
              <div className="pl-6">
                <div className="text-sm font-semibold text-purple-600 mb-3">AI-GENERATED</div>
                {aiGenerated ? (
                  <GreetingContent greeting={aiGenerated} />
                ) : (
                  <div className="text-gray-400 italic">Not available</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GreetingCard({ topicId, greeting, color }: {
  topicId: string,
  greeting: any,
  color: 'blue' | 'purple'
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className={`text-xl font-bold ${color === 'blue' ? 'text-blue-600' : 'text-purple-600'} mb-4`}>
        {topicId}
      </h3>
      <GreetingContent greeting={greeting} />
    </div>
  );
}

function GreetingContent({ greeting }: { greeting: any }) {
  return (
    <div className="space-y-4">
      {/* Speech */}
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
          Speech (Avatar will say this)
        </div>
        <div className="bg-blue-50 rounded p-3 text-sm text-gray-700">
          {greeting.speech.text}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Emotion: <span className="font-medium">{greeting.speech.emotion}</span>
        </div>
      </div>

      {/* Display */}
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
          Display (First Question)
        </div>
        <div className="bg-purple-50 rounded p-3 text-sm prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: renderContent(greeting.display.content) }} />
        </div>
      </div>

      {/* Math Tool */}
      {greeting.mathTool && (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
            Visual Tool
          </div>
          <div className="bg-green-50 rounded p-3 text-xs">
            <div className="font-medium mb-2">
              Tool: <span className="text-green-700">{greeting.mathTool.toolName}</span>
            </div>
            {greeting.mathTool.caption && (
              <div className="text-gray-600 mb-2">
                Caption: {greeting.mathTool.caption}
              </div>
            )}
            <details className="mt-2">
              <summary className="cursor-pointer text-gray-600 hover:text-gray-900 font-medium">
                Show Visualization
              </summary>
              <div className="mt-3 bg-white p-4 rounded border border-gray-200">
                <MathToolRenderer
                  toolName={greeting.mathTool.toolName}
                  parameters={greeting.mathTool.parameters}
                  caption={greeting.mathTool.caption}
                />
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-gray-500 hover:text-gray-700 text-xs">
                  View Parameters (JSON)
                </summary>
                <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto border border-gray-200">
                  {JSON.stringify(greeting.mathTool.parameters, null, 2)}
                </pre>
              </details>
            </details>
          </div>
        </div>
      )}

      {/* Audio URL (if present) */}
      {greeting.speech.preGeneratedAudioUrl && (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">
            Pre-generated Audio
          </div>
          <div className="bg-yellow-50 rounded p-2 text-xs text-gray-700">
            ✓ Audio file: {greeting.speech.preGeneratedAudioUrl}
          </div>
        </div>
      )}
    </div>
  );
}
