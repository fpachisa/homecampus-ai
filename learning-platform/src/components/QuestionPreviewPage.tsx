import { useState, useEffect } from 'react';
import { yamlPathLoader } from '../services/yamlPathLoader';
import QuestionPreviewCard from './QuestionPreviewCard';
import type { PathNode, PreWrittenQuestion, PathLayer } from '../types/practice';

interface YAMLFileInfo {
  filename: string;
  displayName: string;
  category: string;
}

interface YAMLManifest {
  files: YAMLFileInfo[];
}

interface EnrichedQuestion extends PreWrittenQuestion {
  nodeTitle: string;
  nodeId: string;
  layer: PathLayer;
}

const QuestionPreviewPage: React.FC = () => {
  const [manifest, setManifest] = useState<YAMLManifest | null>(null);
  const [selectedFile, setSelectedFile] = useState<YAMLFileInfo | null>(null);
  const [nodes, setNodes] = useState<PathNode[]>([]);
  const [questions, setQuestions] = useState<EnrichedQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [layerFilter, setLayerFilter] = useState<PathLayer | 'all'>('all');
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(50);

  // Load manifest on mount
  useEffect(() => {
    loadManifest();
  }, []);

  // Load YAML file when selection changes
  useEffect(() => {
    if (selectedFile) {
      loadYAMLFile(selectedFile);
      setDisplayLimit(50); // Reset to 10 when changing files
    }
  }, [selectedFile]);

  // Reset display limit when layer filter changes
  useEffect(() => {
    setDisplayLimit(50);
  }, [layerFilter]);

  const loadManifest = async () => {
    try {
      const response = await fetch('/curriculum-content/index.json');
      if (!response.ok) {
        throw new Error('Failed to load manifest');
      }
      const data: YAMLManifest = await response.json();
      setManifest(data);

      // Auto-select first file
      if (data.files.length > 0) {
        setSelectedFile(data.files[0]);
      }
    } catch (err) {
      setError(`Failed to load manifest: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const loadYAMLFile = async (fileInfo: YAMLFileInfo) => {
    setLoading(true);
    setError(null);

    try {
      console.log(`📂 Loading YAML: ${fileInfo.category}`);
      const loadedNodes = await yamlPathLoader.loadUnifiedPath(fileInfo.category);
      setNodes(loadedNodes);

      // Extract all questions with node context
      const allQuestions: EnrichedQuestion[] = loadedNodes.flatMap((node) => {
        const preWrittenQuestions = node.descriptor.preWrittenQuestions || [];
        return preWrittenQuestions.map((q) => ({
          ...q,
          nodeTitle: node.title,
          nodeId: node.id,
          layer: node.layer,
        }));
      });

      setQuestions(allQuestions);
      console.log(`✅ Loaded ${allQuestions.length} questions from ${loadedNodes.length} nodes`);
    } catch (err) {
      setError(`Failed to load YAML file: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setNodes([]);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter questions by layer
  const allFilteredQuestions = layerFilter === 'all'
    ? questions
    : questions.filter((q) => q.layer === layerFilter);

  // Apply display limit for pagination
  const filteredQuestions = allFilteredQuestions.slice(0, displayLimit);
  const hasMore = allFilteredQuestions.length > displayLimit;

  // Stats
  const nodeCount = nodes.length;
  const questionCount = questions.length;
  const filteredCount = allFilteredQuestions.length;

  // Layer counts
  const layerCounts = {
    foundation: questions.filter((q) => q.layer === 'foundation').length,
    integration: questions.filter((q) => q.layer === 'integration').length,
    application: questions.filter((q) => q.layer === 'application').length,
    examPractice: questions.filter((q) => q.layer === 'examPractice').length,
    'word-problems': questions.filter((q) => q.layer === 'word-problems').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          {/* Collapsed Header Bar */}
          {headerCollapsed ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {selectedFile?.displayName || 'Question Preview'}
                </h2>
                <span className="text-sm text-gray-600">
                  {filteredCount} questions
                </span>
              </div>
              <button
                onClick={() => setHeaderCollapsed(false)}
                className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                ▼ Expand
              </button>
            </div>
          ) : (
            <>
              {/* Expanded Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Question Preview & QA Tool
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Visual inspection of AI-generated questions from YAML files
                  </p>
                </div>
                <button
                  onClick={() => setHeaderCollapsed(true)}
                  className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  ▲ Collapse
                </button>
              </div>

              {/* File Selector */}
              <div className="mb-4">
                <label htmlFor="yaml-selector" className="block text-sm font-medium text-gray-700 mb-2">
                  Select YAML File:
                </label>
                <select
                  id="yaml-selector"
                  value={selectedFile?.filename || ''}
                  onChange={(e) => {
                    const file = manifest?.files.find((f) => f.filename === e.target.value);
                    if (file) setSelectedFile(file);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!manifest || loading}
                >
                  {manifest?.files.map((file) => (
                    <option key={file.filename} value={file.filename}>
                      {file.displayName} ({file.filename})
                    </option>
                  ))}
                </select>
              </div>

              {/* Layer Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Layer:
                </label>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setLayerFilter('all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      layerFilter === 'all'
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    All ({questionCount})
                  </button>
                  <button
                    onClick={() => setLayerFilter('foundation')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      layerFilter === 'foundation'
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    Foundation ({layerCounts.foundation})
                  </button>
                  <button
                    onClick={() => setLayerFilter('integration')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      layerFilter === 'integration'
                        ? 'bg-orange-600 text-white'
                        : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                    }`}
                  >
                    Integration ({layerCounts.integration})
                  </button>
                  <button
                    onClick={() => setLayerFilter('application')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      layerFilter === 'application'
                        ? 'bg-green-600 text-white'
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    Application ({layerCounts.application})
                  </button>
                  <button
                    onClick={() => setLayerFilter('examPractice')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      layerFilter === 'examPractice'
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                    }`}
                  >
                    Exam Practice ({layerCounts.examPractice})
                  </button>
                  <button
                    onClick={() => setLayerFilter('word-problems')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      layerFilter === 'word-problems'
                        ? 'bg-violet-600 text-white'
                        : 'bg-violet-100 text-violet-800 hover:bg-violet-200'
                    }`}
                  >
                    Word Problems ({layerCounts['word-problems']})
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="text-sm text-gray-600">
                {loading ? (
                  <span className="text-blue-600">Loading...</span>
                ) : (
                  <span>
                    Showing <span className="font-semibold">{filteredCount}</span> questions from{' '}
                    <span className="font-semibold">{nodeCount}</span> nodes
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <div className="flex items-start gap-2">
              <span className="text-red-600 text-xl">⚠️</span>
              <div>
                <h3 className="text-red-800 font-semibold">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading questions...</p>
          </div>
        )}

        {/* Question Cards */}
        {!loading && !error && filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No questions found in this YAML file.</p>
          </div>
        )}

        {!loading && !error && filteredQuestions.length > 0 && (
          <>
            <div className="space-y-6">
              {filteredQuestions.map((question, index) => (
                <QuestionPreviewCard
                  key={`${question.nodeId}-${question.id}-${index}`}
                  question={question}
                  nodeTitle={question.nodeTitle}
                  nodeId={question.nodeId}
                  layer={question.layer}
                />
              ))}
            </div>

            {/* Showing count and Load More */}
            <div className="text-center py-6 space-y-4">
              <div className="text-sm text-gray-600">
                Showing {filteredQuestions.length} of {filteredCount} questions
              </div>
              {hasMore && (
                <button
                  onClick={() => setDisplayLimit(displayLimit + 50)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Load 50 More ({filteredCount - displayLimit} remaining)
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Back to Top Button (appears when scrolled down) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default QuestionPreviewPage;
