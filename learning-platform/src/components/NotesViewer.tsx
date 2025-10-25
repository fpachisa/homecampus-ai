/**
 * NotesViewer Component
 *
 * Displays interactive React component-based notes for a subtopic.
 * Provides a clean, distraction-free reading experience with navigation controls.
 */

import { useEffect, useState, Suspense } from 'react';
import { X, BookOpen, Printer, Loader2 } from 'lucide-react';
import { notesLoader } from '../services/notesLoader';
import { configLoader } from '../services/configLoader';
import NotesThemeWrapper from './NotesThemeWrapper';

interface NotesViewerProps {
  subtopicId: string;
  onClose: () => void;
}

const NotesViewer: React.FC<NotesViewerProps> = ({ subtopicId, onClose }) => {
  const [NotesComponent, setNotesComponent] = useState<React.ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subtopicName, setSubtopicName] = useState<string>('');

  useEffect(() => {
    const loadNotes = async () => {
      setLoading(true);
      setError(null);

      try {
        // Load subtopic config for display name
        const config = await configLoader.getSubtopicConfig(subtopicId);
        setSubtopicName(config.displayName);

        // Load notes component
        const component = await notesLoader.loadNotesComponent(subtopicId);

        if (!component) {
          setError('Notes not available for this topic');
          setLoading(false);
          return;
        }

        setNotesComponent(() => component);
      } catch (err) {
        console.error('Failed to load notes:', err);
        setError('Failed to load notes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadNotes();
  }, [subtopicId]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 flex items-center justify-between shadow-lg print:hidden">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6" />
          <div>
            <h1 className="text-xl font-bold">Study Notes</h1>
            <p className="text-sm opacity-90">{subtopicName}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            title="Print notes"
          >
            <Printer className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            title="Close notes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {loading && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Loading notes...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-6 rounded-lg">
                <p className="font-semibold mb-2">Oops!</p>
                <p>{error}</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && NotesComponent && (
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
              </div>
            }
          >
            <div className="max-w-5xl mx-auto px-4 py-8">
              <NotesThemeWrapper>
                <NotesComponent />
              </NotesThemeWrapper>
            </div>
          </Suspense>
        )}
      </div>

      {/* Footer - Print only */}
      <div className="hidden print:block p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Home Campus Learning Platform - {subtopicName}
        </p>
      </div>
    </div>
  );
};

export default NotesViewer;
