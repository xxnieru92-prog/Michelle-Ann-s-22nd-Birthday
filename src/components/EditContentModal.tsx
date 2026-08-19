import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, RotateCcw, Image, Type, Sparkles, Check } from 'lucide-react';
import { BirthdayContent } from '../types';
import { DEFAULT_BIRTHDAY_CONTENT } from '../data/defaultData';
import { playSparkleTone } from '../utils/audio';

interface EditContentModalProps {
  isOpen: boolean;
  content: BirthdayContent;
  onSave: (updated: BirthdayContent) => void;
  onClose: () => void;
}

export const EditContentModal: React.FC<EditContentModalProps> = ({
  isOpen,
  content,
  onSave,
  onClose,
}) => {
  const [formData, setFormData] = useState<BirthdayContent>(content);
  const [activeTab, setActiveTab] = useState<'text' | 'photos'>('text');
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    playSparkleTone();
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all text and photos back to original defaults?')) {
      setFormData(DEFAULT_BIRTHDAY_CONTENT);
    }
  };

  const updatePhoto = (index: number, field: 'url' | 'caption' | 'tag' | 'date', value: string) => {
    const updatedMemories = [...formData.memories];
    updatedMemories[index] = { ...updatedMemories[index], [field]: value };
    setFormData({ ...formData, memories: updatedMemories });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-2xl w-full max-h-[90vh] bg-white/80 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_20px_60px_0_rgba(140,101,181,0.25)] border border-white/85 z-10 flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/60 bg-white/40 backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/70 backdrop-blur-md border border-white/80 flex items-center justify-center text-[#5B3E7A] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#E8C875]" />
              </div>
              <div>
                <h3 className="font-serif-display font-semibold text-lg text-[#3D2C50]">
                  Customize Greeting & Photos
                </h3>
                <p className="text-xs text-[#7C6794]">
                  Update text, names, and images live in the preview
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close edit modal"
              className="w-8 h-8 rounded-full bg-white/70 text-[#5B3E7A] border border-white/80 flex items-center justify-center hover:bg-white transition-colors cursor-pointer shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/60 px-6 bg-white/30 backdrop-blur-md gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('text')}
              className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'text'
                  ? 'border-[#5B3E7A] text-[#5B3E7A]'
                  : 'border-transparent text-[#7C6794] hover:text-[#3D2C50]'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Greeting Text & Names</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'photos'
                  ? 'border-[#5B3E7A] text-[#5B3E7A]'
                  : 'border-transparent text-[#7C6794] hover:text-[#3D2C50]'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Photo Gallery Slots ({formData.memories.length})</span>
            </button>
          </div>

          {/* Form Body (Scrollable) */}
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/20 backdrop-blur-md">
            {activeTab === 'text' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                      Birthday Girl's Name
                    </label>
                    <input
                      type="text"
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                      Turning Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                    Hero Subheadline Greeting
                  </label>
                  <textarea
                    rows={2}
                    value={formData.heroSubheadline}
                    onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none resize-none shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                    Main Portrait Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.portraitUrl}
                    onChange={(e) => setFormData({ ...formData, portraitUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                  />
                </div>

                <div className="pt-2 border-t border-white/60">
                  <h4 className="font-serif-display font-semibold text-sm text-[#5B3E7A] mb-3">
                    Heartfelt Letter Content
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                        Letter Salutation (Greeting)
                      </label>
                      <input
                        type="text"
                        value={formData.letterGreeting}
                        onChange={(e) => setFormData({ ...formData, letterGreeting: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                        Letter Paragraph 1
                      </label>
                      <textarea
                        rows={2}
                        value={formData.letterBody[0] || ''}
                        onChange={(e) => {
                          const updated = [...formData.letterBody];
                          updated[0] = e.target.value;
                          setFormData({ ...formData, letterBody: updated });
                        }}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none resize-none shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                        Letter Paragraph 2
                      </label>
                      <textarea
                        rows={2}
                        value={formData.letterBody[1] || ''}
                        onChange={(e) => {
                          const updated = [...formData.letterBody];
                          updated[1] = e.target.value;
                          setFormData({ ...formData, letterBody: updated });
                        }}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none resize-none shadow-inner"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                          Sign-Off Signature
                        </label>
                        <input
                          type="text"
                          value={formData.signOffSignature}
                          onChange={(e) => setFormData({ ...formData, signOffSignature: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5B3E7A] mb-1">
                          Closing Note
                        </label>
                        <input
                          type="text"
                          value={formData.closingNote}
                          onChange={(e) => setFormData({ ...formData, closingNote: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-white/75 backdrop-blur-md border border-white/80 text-sm focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-xs text-[#7C6794]">
                  Paste links to your real photos (or hosted image URLs) to customize each memory slot:
                </p>

                {formData.memories.map((photo, idx) => (
                  <div key={photo.id} className="p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5B3E7A]">
                        Memory Slot #{idx + 1}
                      </span>
                      <span className="text-[11px] text-[#8C65B5]">
                        {photo.tag || 'Photo'}
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5B3E7A] mb-1">
                        Image URL
                      </label>
                      <input
                        type="url"
                        value={photo.url}
                        onChange={(e) => updatePhoto(idx, 'url', e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3 py-1.5 rounded-lg bg-white/85 border border-white/90 text-xs focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#5B3E7A] mb-1">
                          Caption
                        </label>
                        <input
                          type="text"
                          value={photo.caption}
                          onChange={(e) => updatePhoto(idx, 'caption', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-white/85 border border-white/90 text-xs focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#5B3E7A] mb-1">
                          Tag / Date
                        </label>
                        <input
                          type="text"
                          value={photo.tag || ''}
                          onChange={(e) => updatePhoto(idx, 'tag', e.target.value)}
                          placeholder="e.g. Golden Days"
                          className="w-full px-3 py-1.5 rounded-lg bg-white/85 border border-white/90 text-xs focus:ring-2 focus:ring-[#B497D6] outline-none shadow-inner"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-white/60 flex items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-full text-xs font-semibold text-rose-600 hover:bg-rose-50/80 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#5B3E7A] hover:bg-white/50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8C65B5] to-[#5B3E7A] text-white text-xs font-bold shadow-[0_4px_16px_0_rgba(140,101,181,0.3)] hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-white/20"
                >
                  {saveToast ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#E8C875]" />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5 text-[#E8C875]" />
                      <span>Apply Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
