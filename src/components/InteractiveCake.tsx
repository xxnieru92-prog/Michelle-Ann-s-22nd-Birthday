import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flame, Wind, Heart, RotateCcw } from 'lucide-react';
import { fireGrandFireworks, fireSparkleConfetti } from '../utils/confetti';
import { playBlowCandleSound, playSparkleTone } from '../utils/audio';

interface InteractiveCakeProps {
  recipientName: string;
}

export const InteractiveCake: React.FC<InteractiveCakeProps> = ({ recipientName }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [userWish, setUserWish] = useState('');
  const [showWishInput, setShowWishInput] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;
    
    playBlowCandleSound();
    setCandlesBlown(true);
    fireGrandFireworks();
  };

  const handleRelight = () => {
    playSparkleTone();
    setCandlesBlown(false);
    setShowWishInput(false);
    setUserWish('');
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/70 shadow-sm text-[#5B3E7A] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E8C875]" />
            <span>A Birthday Tradition</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-semibold text-[#3D2C50]">
            Make a 22nd Birthday Wish
          </h2>
          <p className="text-sm sm:text-base text-[#6C5682] mt-2">
            Close your eyes, hold a dream close to your heart, and blow out the candles!
          </p>
        </motion.div>

        {/* The Birthday Cake Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-10 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/75 shadow-[0_16px_48px_0_rgba(140,101,181,0.15)] flex flex-col items-center"
        >
          {/* Cake Illustration */}
          <div className="relative w-64 sm:w-72 h-56 flex flex-col items-center justify-end mb-6 select-none">
            
            {/* Candles Row */}
            <div className="flex items-end justify-center gap-4 sm:gap-6 z-20 mb-[-6px]">
              {/* Candle 1 (Representing "2") */}
              <div className="flex flex-col items-center">
                <AnimatePresence>
                  {!candlesBlown ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0, y: -10 }}
                      className="w-4 h-6 rounded-full bg-gradient-to-t from-[#E8C875] via-[#FAD02C] to-[#FFF9E6] shadow-[0_0_12px_#E8C875] animate-flicker mb-1"
                    />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0.8, 0], y: -20 }}
                      transition={{ duration: 1.5 }}
                      className="text-xs text-gray-400 font-mono mb-1 select-none"
                    >
                      💨
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="w-1 h-2 bg-gray-600 rounded-t" />
                <div className="w-3.5 h-12 rounded-t-sm bg-gradient-to-b from-[#B497D6] to-[#8C65B5] shadow-inner border border-white/40 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white/90">2</span>
                </div>
              </div>

              {/* Candle 2 (Representing "2") */}
              <div className="flex flex-col items-center">
                <AnimatePresence>
                  {!candlesBlown ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, opacity: 0, y: -10 }}
                      className="w-4 h-6 rounded-full bg-gradient-to-t from-[#E8C875] via-[#FAD02C] to-[#FFF9E6] shadow-[0_0_12px_#E8C875] animate-flicker mb-1"
                      style={{ animationDelay: '0.3s' }}
                    />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0.8, 0], y: -20 }}
                      transition={{ duration: 1.5, delay: 0.1 }}
                      className="text-xs text-gray-400 font-mono mb-1 select-none"
                    >
                      💨
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="w-1 h-2 bg-gray-600 rounded-t" />
                <div className="w-3.5 h-12 rounded-t-sm bg-gradient-to-b from-[#8C65B5] to-[#5B3E7A] shadow-inner border border-white/40 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white/90">2</span>
                </div>
              </div>
            </div>

            {/* Cake Top Tier */}
            <div className="w-40 sm:w-48 h-14 bg-gradient-to-r from-[#E6D9F2] via-[#F5EDFD] to-[#E6D9F2] rounded-t-2xl border-t border-x border-[#B497D6]/40 relative shadow-md flex items-center justify-center">
              {/* Lavender Frosting Drips */}
              <div className="absolute -top-1 inset-x-2 flex justify-between">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="w-4 h-3 bg-white rounded-b-full shadow-sm" />
                ))}
              </div>
              <span className="text-xs font-serif-display font-bold tracking-wider text-[#5B3E7A]">
                Michelle • 22
              </span>
            </div>

            {/* Cake Base Tier */}
            <div className="w-56 sm:w-64 h-16 bg-gradient-to-r from-[#D8C2EE] via-[#E8DBF6] to-[#D8C2EE] rounded-t-lg border border-[#B497D6]/50 relative shadow-lg flex flex-col justify-center px-4">
              {/* Gold Sugar Pearls / Berries */}
              <div className="flex justify-around items-center">
                {[...Array(7)].map((_, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#E8C875] to-[#FFF4D4] shadow-sm ring-1 ring-white/60"
                  />
                ))}
              </div>
            </div>

            {/* Cake Stand / Plate */}
            <div className="w-64 sm:w-72 h-3.5 bg-gradient-to-r from-gray-200 via-white to-gray-200 rounded-full shadow-md border border-gray-300/60" />
          </div>

          {/* Action Area */}
          {!candlesBlown ? (
            <div className="w-full flex flex-col items-center gap-3">
              <button
                id="btn-blow-candles"
                onClick={handleBlowCandles}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8C65B5] to-[#5B3E7A] text-white font-semibold text-base shadow-lg shadow-[#B497D6]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Wind className="w-5 h-5 text-[#E8C875] group-hover:translate-x-1 transition-transform" />
                <span>Blow Out the Candles 🎂💨</span>
              </button>
              <p className="text-xs text-[#7C6794]">
                Tap the button to blow the candles and release your wish
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="p-5 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/80 text-center mb-4 w-full shadow-sm">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#5B3E7A] text-[#E8C875] mb-2 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-lg font-bold text-[#5B3E7A]">
                  Wish Granted, {recipientName}! ✨
                </h3>
                <p className="text-xs sm:text-sm text-[#3D2C50] mt-1">
                  Your 22nd birthday wish has been sealed with love and sent to the stars. May this year exceed all your dreams!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  id="btn-relight-candles"
                  onClick={handleRelight}
                  className="px-4 py-2 rounded-full bg-white/60 hover:bg-white/80 text-[#5B3E7A] border border-white/80 backdrop-blur-md text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Relight Candles</span>
                </button>
                <button
                  onClick={() => {
                    playSparkleTone();
                    fireSparkleConfetti();
                  }}
                  className="px-4 py-2 rounded-full bg-[#8C65B5] text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm hover:bg-[#5B3E7A] cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E8C875]" />
                  <span>More Confetti!</span>
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
