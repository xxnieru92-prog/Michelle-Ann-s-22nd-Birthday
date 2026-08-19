import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquareHeart, Heart, Send, Sparkles, Plus, Check } from 'lucide-react';
import { Wish } from '../types';
import { INITIAL_WISHES } from '../data/defaultData';
import { fireSparkleConfetti, fireGrandFireworks } from '../utils/confetti';
import { playSparkleTone } from '../utils/audio';

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const saved = localStorage.getItem('michelle_ann_birthday_wishes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_WISHES;
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [relation, setRelation] = useState('Friend 🌸');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💖');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      localStorage.setItem('michelle_ann_birthday_wishes', JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const bgGradients = [
      'from-purple-300 to-pink-200',
      'from-violet-300 to-indigo-200',
      'from-fuchsia-200 to-purple-200',
      'from-amber-200 to-purple-200',
      'from-rose-200 to-violet-200',
    ];

    const newWish: Wish = {
      id: `wish-${Date.now()}`,
      author: author.trim(),
      relation: relation,
      message: message.trim(),
      avatarBg: bgGradients[Math.floor(Math.random() * bgGradients.length)],
      timestamp: 'Just now',
      likes: 1,
      emoji: selectedEmoji,
    };

    setWishes([newWish, ...wishes]);
    setAuthor('');
    setMessage('');
    setIsFormOpen(false);

    playSparkleTone();
    fireGrandFireworks();
  };

  const handleLike = (id: string) => {
    playSparkleTone();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
    setWishes((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const isLiked = likedMap[id];
          return { ...w, likes: isLiked ? Math.max(0, w.likes - 1) : w.likes + 1 };
        }
        return w;
      })
    );
  };

  const emojis = ['💖', '🎂', '✨', '🌸', '🥂', '🥳', '🌟', '🦄'];
  const relations = ['Friend 🌸', 'Bestie 💕', 'Family 🏡', 'Sister ✨', 'College Gang 🎓', 'Work Chum ☕', 'Soulmate 💜'];

  return (
    <section id="wishes-wall-section" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/70 shadow-sm text-[#5B3E7A] text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#8C65B5]" />
            <span>Celebratory Guestbook</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-semibold text-[#3D2C50]">
            The 22nd Birthday Wishes Wall
          </h2>
          <p className="text-sm sm:text-base text-[#6C5682] max-w-md mx-auto mt-2">
            Messages of love, cheer, and blessings from friends and family across the globe.
          </p>

          {/* Button to Open Form */}
          <div className="mt-6">
            <button
              id="btn-open-wish-form"
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8C65B5] to-[#5B3E7A] text-white text-sm font-semibold shadow-[0_8px_25px_0_rgba(140,101,181,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
            >
              {isFormOpen ? (
                <>
                  <span>Close Wish Box</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 text-[#E8C875]" />
                  <span>Leave a Birthday Wish for Michelle</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Leave a Wish Form (Expandable) */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleSubmit}
              className="mb-12 p-6 sm:p-8 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_16px_48px_0_rgba(140,101,181,0.15)] overflow-hidden"
            >
              <h3 className="font-serif-display text-xl font-semibold text-[#5B3E7A] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E8C875]" />
                Write Your Heartfelt Wish
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="wish-author-name" className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="wish-author-name"
                    type="text"
                    required
                    placeholder="e.g. Jessica, Uncle David, Mom"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-sm text-[#3D2C50] focus:outline-none focus:ring-2 focus:ring-[#B497D6] transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="wish-relation-select" className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1.5">
                    Relationship Tag
                  </label>
                  <select
                    id="wish-relation-select"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-sm text-[#3D2C50] focus:outline-none focus:ring-2 focus:ring-[#B497D6] transition-all shadow-inner"
                  >
                    {relations.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="wish-message-text" className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1.5">
                  Your Birthday Message
                </label>
                <textarea
                  id="wish-message-text"
                  required
                  rows={3}
                  placeholder="Dear Michelle, wishing you an unforgettable 22nd year filled with happiness..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-sm text-[#3D2C50] focus:outline-none focus:ring-2 focus:ring-[#B497D6] transition-all resize-none shadow-inner"
                />
              </div>

              {/* Emoji Picker */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-2">
                  Pick a celebratory sticker:
                </label>
                <div className="flex flex-wrap gap-2">
                  {emojis.map((emoji) => (
                    <button
                      type="button"
                      key={emoji}
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-9 h-9 rounded-full text-base flex items-center justify-center transition-transform cursor-pointer ${
                        selectedEmoji === emoji
                          ? 'bg-[#5B3E7A] text-white scale-110 shadow-md ring-2 ring-white/80'
                          : 'bg-white/60 hover:bg-white/90 text-gray-700 border border-white/60'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#5B3E7A] hover:bg-white/50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  id="btn-submit-wish"
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8C65B5] to-[#5B3E7A] text-white text-xs font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-white/20"
                >
                  <Send className="w-3.5 h-3.5 text-[#E8C875]" />
                  <span>Post Birthday Wish</span>
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Wishes Staggered Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {wishes.map((wish, index) => {
            const isLiked = likedMap[wish.id];
            return (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-3xl bg-white/45 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_0_rgba(140,101,181,0.08)] flex flex-col justify-between hover:bg-white/60 hover:border-white/90 hover:shadow-xl transition-all relative group"
              >
                {/* Top author details */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${wish.avatarBg} flex items-center justify-center text-base shadow-sm font-bold text-[#5B3E7A] border border-white/60`}>
                        {wish.emoji || '💖'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3D2C50] text-sm">
                          {wish.author}
                        </h4>
                        <span className="text-[11px] font-medium text-[#8C65B5]">
                          {wish.relation}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#A08CB6]">
                      {wish.timestamp}
                    </span>
                  </div>

                  {/* Message body */}
                  <p className="text-sm text-[#3D2C50] leading-relaxed font-normal">
                    {wish.message}
                  </p>
                </div>

                {/* Footer with Like Button */}
                <div className="mt-4 pt-3 border-t border-white/60 flex items-center justify-between">
                  <span className="text-xs text-[#8C65B5] font-serif-display italic">
                    With warmth & blessings
                  </span>

                  <button
                    id={`btn-like-${wish.id}`}
                    onClick={() => handleLike(wish.id)}
                    aria-label={`Like wish from ${wish.author}`}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isLiked
                        ? 'bg-rose-50/90 text-rose-600 border border-rose-200 shadow-sm'
                        : 'bg-white/60 hover:bg-white/90 text-[#5B3E7A] border border-white/80'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-[#B497D6]'}`} />
                    <span>{wish.likes}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
