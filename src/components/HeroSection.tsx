import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, ChevronDown, Gift, Cake } from 'lucide-react';
import { BirthdayContent } from '../types';
import { fireSparkleConfetti, fireGrandFireworks } from '../utils/confetti';
import { playSparkleTone } from '../utils/audio';

interface HeroSectionProps {
  content: BirthdayContent;
  onOpenWishModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, onOpenWishModal }) => {
  const handlePopConfetti = () => {
    playSparkleTone();
    fireGrandFireworks();
  };

  const scrollToNext = () => {
    const letterSection = document.getElementById('letter-section');
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-12 overflow-hidden text-center z-10">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(230, 217, 242, 0.75) 0%, rgba(180, 151, 214, 0.25) 50%, rgba(253, 251, 255, 0) 75%)',
        }}
      />

      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Milestone Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/70 shadow-[0_4px_20px_0_rgba(180,151,214,0.15)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E8C875] animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#5B3E7A]">
            Chapter 22 • Special Edition
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#E8C875]" />
        </motion.div>

        {/* Central Circular Framed Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          className="relative mb-8 group cursor-pointer"
          onClick={handlePopConfetti}
          title="Click to celebrate Michelle!"
        >
          {/* Outer glow rings */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#B497D6]/40 via-[#E6D9F2]/60 to-[#E8C875]/40 blur-xl animate-pulse-glow" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/80 via-[#E8C875] to-white/80 opacity-60 animate-spin" style={{ animationDuration: '18s' }} />

          {/* Portrait Container */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full p-2 bg-white/30 backdrop-blur-2xl shadow-[0_12px_36px_0_rgba(140,101,181,0.22)] overflow-hidden ring-4 ring-white/60 border border-white/80">
            <img
              src={content.portraitUrl}
              alt={content.recipientName}
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center rounded-full transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#5B3E7A]/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E8C875]" /> Tap to Celebrate
              </span>
            </div>
          </div>

          {/* Floating badge over photo */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-2 -right-1 bg-white/70 backdrop-blur-xl px-3.5 py-1 rounded-full shadow-[0_4px_16px_0_rgba(140,101,181,0.18)] border border-white/80 flex items-center gap-1.5 text-xs font-bold text-[#5B3E7A]"
          >
            <Cake className="w-3.5 h-3.5 text-[#B497D6]" />
            <span>Turning 22</span>
          </motion.div>
        </motion.div>

        {/* Large Elegant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-serif-display font-semibold tracking-tight text-[#3D2C50] leading-tight mb-4"
        >
          Happy <span className="text-gradient-purple">22nd Birthday</span>,
          <br />
          <span className="italic text-[#5B3E7A]">{content.recipientName}</span>! 🎂
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-[#6C5682] max-w-md mx-auto font-normal leading-relaxed mb-8"
        >
          {content.heroSubheadline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
        >
          <button
            id="btn-hero-celebrate"
            onClick={handlePopConfetti}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8C65B5] via-[#5B3E7A] to-[#8C65B5] text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_0_rgba(140,101,181,0.35)] hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-[#E8C875] group-hover:rotate-45 transition-transform" />
            <span>Pop Birthday Confetti 🎉</span>
          </button>

          <button
            id="btn-hero-read-letter"
            onClick={scrollToNext}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/40 hover:bg-white/60 text-[#5B3E7A] font-semibold text-sm sm:text-base backdrop-blur-xl border border-white/70 shadow-[0_6px_20px_0_rgba(180,151,214,0.15)] hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-4 h-4 text-[#B497D6]" />
            <span>Read Birthday Letter</span>
          </button>
        </motion.div>
      </div>

      {/* Bouncing Scroll-down indicator */}
      <motion.button
        id="btn-scroll-down"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
        className="mt-12 sm:mt-16 inline-flex flex-col items-center gap-1.5 px-4 py-2 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/50 text-[#8C65B5] hover:text-[#5B3E7A] transition-all cursor-pointer group shadow-sm"
      >
        <span className="text-xs uppercase tracking-widest font-semibold opacity-85 group-hover:opacity-100">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#B497D6]" />
      </motion.button>
    </header>
  );
};
