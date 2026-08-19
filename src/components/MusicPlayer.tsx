import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { playHappyBirthdayTune, playCelebrationArpeggio } from '../utils/audio';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playHappyBirthdayTune(() => {
        setIsPlaying(false);
      });
    }
  };

  const playQuickChime = () => {
    playCelebrationArpeggio();
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      <button
        id="btn-play-birthday-tune"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause birthday tune' : 'Play birthday tune'}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-[0_6px_20px_0_rgba(140,101,181,0.18)] active:scale-95 cursor-pointer ${
          isPlaying
            ? 'bg-[#5B3E7A] text-white ring-2 ring-white/80'
            : 'bg-white/60 hover:bg-white/80 text-[#5B3E7A] border border-white/80 backdrop-blur-xl'
        }`}
      >
        <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-[#E8C875]' : 'text-[#B497D6]'}`} />
        <span className="hidden sm:inline">
          {isPlaying ? 'Playing Birthday Melody' : 'Play Birthday Song'}
        </span>
        <span className="sm:hidden">
          {isPlaying ? 'Playing' : 'Music'}
        </span>
        
        {/* Animated equalizer bars when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3 w-3.5 ml-1">
            <span className="w-1 bg-[#E8C875] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
            <span className="w-1 bg-[#E8C875] rounded-full animate-[pulse_0.4s_ease-in-out_infinite_0.2s] h-3"></span>
            <span className="w-1 bg-[#E8C875] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.1s] h-1.5"></span>
          </div>
        ) : (
          <Sparkles className="w-3 h-3 text-[#E8C875]" />
        )}
      </button>

      {/* Quick chime trigger */}
      <button
        id="btn-quick-chime"
        onClick={playQuickChime}
        title="Play celebration chime"
        aria-label="Play chime"
        className="w-9 h-9 rounded-full bg-white/60 hover:bg-white/85 text-[#5B3E7A] border border-white/80 flex items-center justify-center shadow-[0_4px_16px_0_rgba(140,101,181,0.15)] backdrop-blur-xl active:scale-90 transition-all text-xs cursor-pointer"
      >
        ✨
      </button>
    </div>
  );
};
