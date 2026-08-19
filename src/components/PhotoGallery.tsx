import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Camera, Eye, Heart, Calendar } from 'lucide-react';
import { MemoryPhoto } from '../types';
import { PhotoLightbox } from './PhotoLightbox';
import { playSparkleTone } from '../utils/audio';

interface PhotoGalleryProps {
  memories: MemoryPhoto[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ memories }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  const handlePhotoClick = (photo: MemoryPhoto) => {
    playSparkleTone();
    setSelectedPhoto(photo);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/70 shadow-sm text-[#5B3E7A] text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Camera className="w-3.5 h-3.5 text-[#8C65B5]" />
            <span>Memories & Moments</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-semibold text-[#3D2C50]">
            A Glimpse of 22 Wonderful Years
          </h2>
          <p className="text-sm sm:text-base text-[#6C5682] max-w-md mx-auto mt-2">
            Capturing snapshots of genuine smiles, golden adventures, and sweet laughter.
          </p>
        </div>

        {/* 6 Photos Grid (Mobile 1-2 col, Tablet 2 col, Desktop 3 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {memories.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => handlePhotoClick(photo)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white/45 backdrop-blur-xl border border-white/70 shadow-[0_8px_32px_0_rgba(140,101,181,0.1)] hover:shadow-2xl hover:bg-white/60 hover:border-white/90 transition-all flex flex-col"
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FAF6FD]">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Lavender-tinted overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B3E7A]/75 via-[#B497D6]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 backdrop-blur-[2px]">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30">
                    <Eye className="w-3.5 h-3.5" /> View Photo
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 text-[#5B3E7A] flex items-center justify-center shadow-md">
                    <Heart className="w-4 h-4 text-[#B497D6] fill-[#B497D6]" />
                  </div>
                </div>

                {/* Tag pill */}
                {photo.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md text-[11px] font-bold text-[#5B3E7A] shadow-sm border border-white/80">
                    {photo.tag}
                  </div>
                )}
              </div>

              {/* Photo Caption & Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white/30 backdrop-blur-md">
                <p className="font-serif-display text-base sm:text-lg font-medium text-[#3D2C50] leading-snug mb-2 group-hover:text-[#5B3E7A] transition-colors">
                  {photo.caption}
                </p>

                <div className="flex items-center justify-between text-xs text-[#7C6794] pt-2 border-t border-white/60">
                  <span>{photo.date || 'Cherished Memory'}</span>
                  <span className="flex items-center gap-1 text-[#8C65B5]">
                    <Sparkles className="w-3 h-3 text-[#E8C875]" />
                    <span>Memory #{index + 1}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
};
