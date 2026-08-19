import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Sparkles, Heart } from 'lucide-react';
import { MemoryPhoto } from '../types';

interface PhotoLightboxProps {
  photo: MemoryPhoto | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-2xl w-full bg-white/70 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] border border-white/80 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close photo preview"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Photo */}
          <div className="relative max-h-[65vh] w-full bg-black/20 backdrop-blur-md flex items-center justify-center overflow-hidden">
            <img
              src={photo.url}
              alt={photo.caption}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain max-h-[65vh]"
            />
          </div>

          {/* Caption & Details Footer */}
          <div className="p-6 bg-white/50 backdrop-blur-xl border-t border-white/60">
            <div className="flex items-center gap-2 mb-2">
              {photo.tag && (
                <span className="px-3 py-0.5 rounded-full bg-white/70 backdrop-blur-md text-[#5B3E7A] text-xs font-semibold border border-white/80 shadow-sm">
                  {photo.tag}
                </span>
              )}
              {photo.date && (
                <span className="flex items-center gap-1 text-xs text-[#7C6794]">
                  <Calendar className="w-3 h-3" />
                  {photo.date}
                </span>
              )}
              {photo.location && (
                <span className="flex items-center gap-1 text-xs text-[#7C6794]">
                  <MapPin className="w-3 h-3" />
                  {photo.location}
                </span>
              )}
            </div>

            <p className="font-serif-display text-lg sm:text-xl font-medium text-[#3D2C50]">
              {photo.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
