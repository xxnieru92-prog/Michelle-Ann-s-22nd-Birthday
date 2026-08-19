import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Flower2, Quote, Send } from 'lucide-react';
import { BirthdayContent } from '../types';
import { fireGentleStarShower } from '../utils/confetti';
import { playSparkleTone } from '../utils/audio';

interface HeartfeltLetterProps {
  content: BirthdayContent;
}

export const HeartfeltLetter: React.FC<HeartfeltLetterProps> = ({ content }) => {
  const handleFoilClick = () => {
    playSparkleTone();
    fireGentleStarShower();
  };

  return (
    <section
      id="letter-section"
      className="py-16 sm:py-24 px-4 sm:px-6 relative z-10"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/70 shadow-sm text-[#5B3E7A] text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Flower2 className="w-3.5 h-3.5 text-[#8C65B5]" />
            <span>A Message From The Heart</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-semibold text-[#3D2C50]">
            {content.letterHeadline}
          </h2>
        </div>

        {/* Letter Card with Frosted Glassmorphism & Translucent Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-6 sm:p-10 bg-white/45 backdrop-blur-2xl border border-white/75 shadow-[0_16px_48px_0_rgba(140,101,181,0.14)]"
        >
          {/* Decorative Corner Flowers & Sparkles */}
          <div className="absolute top-4 left-4 text-[#B497D6]/50 select-none">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-4 right-4 text-[#E8C875]/70 select-none">
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Floating Wax Stamp */}
          <button
            id="btn-wax-seal"
            onClick={handleFoilClick}
            title="Tap the wax seal for sparkles!"
            className="absolute -top-6 right-8 sm:right-12 w-14 h-14 rounded-full bg-gradient-to-br from-[#8C65B5] to-[#5B3E7A] text-[#E8C875] flex flex-col items-center justify-center shadow-[0_6px_20px_0_rgba(91,62,122,0.35)] border-2 border-white/90 cursor-pointer hover:scale-110 active:scale-95 transition-transform group"
          >
            <span className="text-[10px] font-bold tracking-tighter text-white uppercase">22nd</span>
            <Heart className="w-3.5 h-3.5 fill-[#E8C875] text-[#E8C875] group-hover:scale-125 transition-transform" />
          </button>

          {/* Letter Salutation */}
          <div className="mb-6 pt-2">
            <p className="font-serif-display text-xl sm:text-2xl font-semibold text-[#5B3E7A]">
              {content.letterGreeting}
            </p>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[#3D2C50] font-normal leading-relaxed">
            {content.letterBody.map((paragraph, idx) => (
              <p key={idx} className="relative pl-1">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="my-8 flex items-center justify-center gap-3">
            <div className="h-px bg-gradient-to-r from-transparent via-[#B497D6]/50 to-transparent w-full" />
            <span className="text-[#E8C875] text-sm">✦</span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#B497D6]/50 to-transparent w-full" />
          </div>

          {/* Sign-off */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
            <div>
              <p className="text-sm italic text-[#7C6794]">
                {content.letterClosing}
              </p>
              <p className="font-serif-display text-xl sm:text-2xl font-semibold text-[#5B3E7A] mt-1">
                {content.signOffSignature}
              </p>
            </div>

            {/* Tap for love button */}
            <button
              onClick={handleFoilClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/50 hover:bg-white/70 text-[#5B3E7A] text-xs font-semibold backdrop-blur-md transition-all border border-white/80 shadow-sm self-start sm:self-auto active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#E8C875]" />
              <span>Shower Love 💜</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
