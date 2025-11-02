import { Routes, Route, Navigate } from 'react-router-dom';
import AvatarTest from '../components/AvatarTest';
import QuestionPreviewPage from '../components/QuestionPreviewPage';
import VisualizerTestPage from '../pages/VisualizerTestPage';
import NotesViewerPage from '../pages/NotesViewerPage';
// Import other dev components as needed

/**
 * DevRouter handles all /dev/* routes
 * These routes are for development testing only
 *
 * Routes:
 * - /dev/tts - TTS testing (formerly ?test=tts)
 * - /dev/avatar - Avatar testing (formerly ?test=avatar)
 * - /dev/visualizers - Math visualizer gallery (TODO)
 * - /dev/preview - Question preview (TODO)
 *
 * Note: In production, these routes should be disabled or gated by environment check
 */

// TTS Testing Page
const TTSTestPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">TTS Testing</h1>
      <p className="text-gray-300">TTS testing interface - TODO: Implement TTS test UI</p>
    </div>
  );
};

// Avatar Testing Page
const AvatarTestPage = () => {
  return <AvatarTest />;
};

// Math Visualizer Testing Lab
const VisualizerGallery = () => {
  return <VisualizerTestPage />;
};

// Question Preview Tool - uses QuestionPreviewPage component
const QuestionPreview = () => {
  return <QuestionPreviewPage />;
};

// Notes Viewer - view and test all notes components
const NotesViewer = () => {
  return <NotesViewerPage />;
};

// Dev home - lists all dev tools
const DevHome = () => {
  const devTools = [
    { path: '/dev/tts', name: 'TTS Testing', description: 'Test text-to-speech functionality' },
    { path: '/dev/avatar', name: 'Avatar Testing', description: 'Test avatar animations and interactions' },
    { path: '/dev/visualizers', name: 'Math Visualizer Testing Lab', description: 'Test all math visualizers with AI-generated questions' },
    { path: '/dev/notes', name: 'Notes Viewer', description: 'View and test all notes components' },
    { path: '/dev/preview', name: 'Question Preview', description: 'Preview and test question generation' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Development Tools</h1>
      <p className="text-gray-400 mb-8">Testing and debugging utilities</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {devTools.map((tool) => (
          <a
            key={tool.path}
            href={tool.path}
            className="block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-400">{tool.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a href="/home" className="text-indigo-400 hover:text-indigo-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default function DevRouter() {
  // In production, redirect to home or show 404
  if (import.meta.env.PROD) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Routes>
      <Route index element={<DevHome />} />
      <Route path="tts" element={<TTSTestPage />} />
      <Route path="avatar" element={<AvatarTestPage />} />
      <Route path="visualizers" element={<VisualizerGallery />} />
      <Route path="notes" element={<NotesViewer />} />
      <Route path="preview" element={<QuestionPreview />} />
      <Route path="*" element={<Navigate to="/dev" replace />} />
    </Routes>
  );
}
