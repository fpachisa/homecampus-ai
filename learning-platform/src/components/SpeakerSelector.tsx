/**
 * Speaker Selector Component
 * Allows users to select their preferred TTS voice/speaker
 */

import React from 'react';
import { useSpeakerConfig } from '../hooks/useSpeakerConfig';

interface SpeakerSelectorProps {
  className?: string;
}

export const SpeakerSelector: React.FC<SpeakerSelectorProps> = ({ className = '' }) => {
  const { currentSpeaker, availableSpeakers, setSpeaker } = useSpeakerConfig();

  if (availableSpeakers.length === 0) {
    return null; // No speakers available
  }

  return (
    <div className={`speaker-selector ${className}`}>
      <label htmlFor="tts-speaker" className="block text-sm font-medium mb-2">
        Voice Selection
      </label>
      <select
        id="tts-speaker"
        value={currentSpeaker}
        onChange={(e) => setSpeaker(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {availableSpeakers.map((speaker) => (
          <option key={speaker} value={speaker}>
            {speaker}
          </option>
        ))}
      </select>
      <p className="mt-1 text-xs text-gray-500">
        Choose your preferred tutor voice
      </p>
    </div>
  );
};

export default SpeakerSelector;
