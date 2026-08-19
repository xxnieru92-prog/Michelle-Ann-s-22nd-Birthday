import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Share2, Check, Copy, Cake, Edit3 } from 'lucide-react';
import { BirthdayContent } from '../types';
import { fireGrandFireworks, fireSparkleConfetti } from '../utils/confetti';
import { playSparkleTone } from '../utils/audio';

interface ClosingSectionProps {
  content: BirthdayContent;
  onOpenEditModal: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ content, onOpenEditModal }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    playSparkleTone();
    fireSparkleConfetti();

    const shareData = {
      title: `Happy 22nd Birthday, ${content.recipientName}! 🎂✨`,
      text: `Join us in celebrating ${content.recipientName}'s 22nd birthday! Send your wishes and see cherished memories:`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // noop
    }
  };

  const handleGrandCelebrate = () => {
    playSparkleTone();
    fireGrandFireworks();
  };

  return (
    <footer className="py-20 sm:py-28 px-4 sm:px-6 relative z-10 text-center overflow-hidden">
      {/* Background soft lavender glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(230, 217, 242, 0.6) 0%, rgba(253, 251, 255, 0) 70%)',
        }}
      />

      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Floating Celebration Cake/Heart Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={handleGrandCelebrate}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#B497D6] via-[#E6D9F2] to-[#E8C875] p-1 shadow-[0_8px_25px_0_rgba(140,101,181,0.25)] mb-6 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
        >
          <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#5B3E7A]">
            <Cake className="w-8 h-8 sm:w-10 sm:h-10 text-[#8C65B5]" />
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-display text-2xl sm:text-4xl font-semibold text-[#3D2C50] leading-tight mb-4"
        >
          Here’s to the Most Magical
          <br />
          <span className="text-gradient-purple">22nd Chapter Yet</span> ✨
        </motion.h3>

        <p className="text-base text-[#6C5682] max-w-md mx-auto mb-6">
          {content.closingNote}
        </p>

        {/* Signature Box */}
        <div className="p-6 rounded-3xl bg-white/45 backdrop-blur-xl border border-white/75 shadow-[0_8px_30px_0_rgba(140,101,181,0.1)] mb-8 max-w-sm w-full">
          <p className="text-xs uppercase tracking-widest text-[#8C65B5] font-semibold mb-1">
            Endless Love & Hugs
          </p>
          <p className="font-serif-display text-2xl font-bold text-[#5B3E7A]">
            {content.signOffSignature}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-8">
          <button
            id="btn-share-page"
            onClick={handleShare}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8C65B5] to-[#5B3E7A] text-white font-semibold text-sm shadow-[0_8px_25px_0_rgba(140,101,181,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#E8C875]" />
                <span>Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#E8C875]" />
                <span>Share This Birthday Card</span>
              </>
            )}
          </button>

          <button
            id="btn-edit-greeting"
            onClick={onOpenEditModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/40 hover:bg-white/60 text-[#5B3E7A] border border-white/75 backdrop-blur-xl font-semibold text-sm shadow-[0_6px_20px_0_rgba(180,151,214,0.12)] hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-[#B497D6]" />
            <span>Customize Text & Photos</span>
          </button>
        </div>

        {/* Footer Credit & Sparkles */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-xs text-[#7C6794] shadow-sm">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 fill-[#B497D6] text-[#B497D6]" />
          <span>especially for {content.recipientName} • 22nd Birthday</span>
        </div>
      </div>
    </footer>
  );
};
