/**
 * Type definitions for Michelle Ann's 22nd Birthday Greeting App
 */

export interface Wish {
  id: string;
  author: string;
  relation: string;
  message: string;
  avatarBg: string;
  timestamp: string;
  likes: number;
  emoji: string;
}

export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  location?: string;
  tag?: string;
}

export interface MilestoneFact {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface BirthdayContent {
  recipientName: string;
  nickname: string;
  age: number;
  heroHeadline: string;
  heroSubheadline: string;
  portraitUrl: string;
  letterHeadline: string;
  letterGreeting: string;
  letterBody: string[];
  letterClosing: string;
  signOffSignature: string;
  closingNote: string;
  musicTitle: string;
  memories: MemoryPhoto[];
  milestones: MilestoneFact[];
}
