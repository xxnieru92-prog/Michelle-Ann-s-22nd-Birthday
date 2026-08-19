/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FloatingParticles } from './components/FloatingParticles';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { HeartfeltLetter } from './components/HeartfeltLetter';
import { Milestone22 } from './components/Milestone22';
import { InteractiveCake } from './components/InteractiveCake';
import { PhotoGallery } from './components/PhotoGallery';
import { WishesWall } from './components/WishesWall';
import { ClosingSection } from './components/ClosingSection';
import { EditContentModal } from './components/EditContentModal';
import { DEFAULT_BIRTHDAY_CONTENT } from './data/defaultData';
import { BirthdayContent } from './types';

export default function App() {
  const [content, setContent] = useState<BirthdayContent>(() => {
    try {
      const saved = localStorage.getItem('michelle_ann_birthday_content');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return DEFAULT_BIRTHDAY_CONTENT;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSaveContent = (updated: BirthdayContent) => {
    setContent(updated);
    try {
      localStorage.setItem('michelle_ann_birthday_content', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7FC] text-[#3D2C50] overflow-x-hidden selection:bg-[#B497D6]/30 selection:text-[#3D2C50]">
      {/* Luminous ambient background mesh glows for frosted glass refraction */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-[10%] left-[15%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-br from-[#E6D9F2]/60 via-[#B497D6]/25 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[30%] -right-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-bl from-[#E8C875]/25 via-[#E6D9F2]/40 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[65%] -left-[10%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#B497D6]/35 via-[#F5EDFD]/50 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-[5%] right-[10%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-gradient-to-tl from-[#E8C875]/30 via-[#E6D9F2]/50 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Background Floating Confetti, Balloons & Bokeh Particles */}
      <FloatingParticles />

      {/* Floating Audio Controller */}
      <MusicPlayer />

      {/* Main Single-Page Content */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection content={content} />

        {/* 2. Heartfelt Birthday Letter */}
        <HeartfeltLetter content={content} />

        {/* 3. Milestone 22 Centerpiece & Fun Facts */}
        <Milestone22 content={content} />

        {/* 4. Interactive 22nd Birthday Cake & Candle Blowing Experience */}
        <InteractiveCake recipientName={content.recipientName} />

        {/* 5. Photo Gallery & Cherished Memories (6 photo slots) */}
        <PhotoGallery memories={content.memories} />

        {/* 6. Interactive Wishes Wall / Guestbook */}
        <WishesWall />

        {/* 7. Closing Sign-Off & Share Section */}
        <ClosingSection
          content={content}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />
      </main>

      {/* Content Customization Modal for Sender */}
      <EditContentModal
        isOpen={isEditModalOpen}
        content={content}
        onSave={handleSaveContent}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
}
