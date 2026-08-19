import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Heart, Crown, Calendar, Star } from 'lucide-react';
import { BirthdayContent } from '../types';
import { fireSparkleConfetti } from '../utils/confetti';
import { playSparkleTone } from '../utils/audio';

interface Milestone22Props {
  content: BirthdayContent;
}

export const Milestone22: React.FC<Milestone22Props> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#E8C875]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#B497D6]" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#E8C875]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8C65B5]" />;
    }
  };

  const handleMilestoneClick = () => {
    playSparkleTone();
    fireSparkleConfetti();
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Centerpiece Stylized "22" Display */}
        <div className="relative text-center mb-16">
          {/* Subtle floral/sparkle ring background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-[#E6D9F2]/60 via-[#FDFBFF] to-[#E8C875]/30 -z-10 blur-xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            onClick={handleMilestoneClick}
            className="inline-block cursor-pointer group"
            title="Click to celebrate 22 years!"
          >
            {/* The Big 22 Number */}
            <div className="relative inline-flex items-center justify-center">
              <span className="font-serif-display text-8xl sm:text-9xl md:text-[11rem] font-bold tracking-tighter text-gradient-purple drop-shadow-sm select-none group-hover:scale-105 transition-transform duration-500">
                22
              </span>

              {/* Floating Star Ornaments */}
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-3 -right-4 sm:-right-8 text-2xl sm:text-4xl text-[#E8C875]"
              >
                ✦
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 -left-3 sm:-left-6 text-xl sm:text-3xl text-[#B497D6]"
              >
                ✨
              </motion.span>
            </div>

            {/* Label below the number */}
            <div className="mt-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-xl border border-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#5B3E7A] shadow-sm">
                Years of Radiant Living
              </span>
            </div>
          </motion.div>

          <p className="mt-4 text-sm sm:text-base text-[#6C5682] max-w-md mx-auto">
            A milestone chapter honoring wisdom, kindness, ambition, and unconditional laughter.
          </p>
        </div>

        {/* Milestone Statistics Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {content.milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={handleMilestoneClick}
              className="p-5 rounded-2xl bg-white/45 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_0_rgba(140,101,181,0.08)] flex flex-col items-center text-center cursor-pointer transition-all hover:bg-white/65 hover:border-white/90 hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/70 flex items-center justify-center mb-3 shadow-sm">
                {getIcon(item.icon)}
              </div>

              <span className="text-2xl sm:text-3xl font-serif-display font-bold text-[#5B3E7A] mb-1">
                {item.value}
              </span>

              <span className="text-xs font-semibold text-[#3D2C50] uppercase tracking-wider mb-1">
                {item.label}
              </span>

              <p className="text-[11px] text-[#7C6794] leading-tight">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
