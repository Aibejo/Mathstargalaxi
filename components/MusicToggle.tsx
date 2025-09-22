import React from 'react';
import SoundOnIcon from './icons/SoundOnIcon';
import SoundOffIcon from './icons/SoundOffIcon';

interface MusicToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

export default function MusicToggle({ isMuted, onToggle }: MusicToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700/70 transition-colors"
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      {isMuted ? <SoundOffIcon className="w-6 h-6" /> : <SoundOnIcon className="w-6 h-6" />}
    </button>
  );
}