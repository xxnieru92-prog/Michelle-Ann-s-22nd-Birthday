import { BirthdayContent, Wish } from '../types';

export const DEFAULT_BIRTHDAY_CONTENT: BirthdayContent = {
  recipientName: 'Michelle Ann',
  nickname: 'Mimi',
  age: 22,
  heroHeadline: 'Happy 22nd Birthday, Michelle Ann! 🎂✨',
  heroSubheadline: 'Celebrating 22 wonderful years of your radiant smile, gentle kindness, and boundless grace.',
  // Elegant aesthetic portrait placeholder with soft lavender/natural tones
  portraitUrl: '/images/img1.jpeg',
  letterHeadline: 'A Letter for Your 22nd Chapter',
  letterGreeting: 'Dearest Michelle,',
  letterBody: [
    'Twenty-two looks so extraordinarily beautiful on you. As you step into this exciting new year, we want to remind you just how deeply loved, admired, and cherished you are by everyone blessed enough to know you.',
    'Your warmth lights up every room you walk into, your laughter is contagious, and your unwavering heart brings so much comfort and joy to our lives. You tackle every challenge with quiet resilience and grace, constantly inspiring those around you to dream bigger and love deeper.',
    'May this year unfold with unforgettable adventures, gentle serendipities, career milestones, late-night giggles, cozy coffee mornings, and all the sweet happiness you so effortlessly give out to the world.',
    'Always remember how special you are. Here’s to dreaming fearlessly and shining brightly in your 22nd year!'
  ],
  letterClosing: 'With endless love, admiration & warmest hugs,',
  signOffSignature: 'Family & Friends 💜',
  closingNote: 'May all 22 of your birthday wishes come true today and always.',
  musicTitle: 'Lavender Dream (Acoustic Chime)',
  memories: [
    {
      id: 'photo-1',
      url: '/images/vid1.mp4',
      caption: 'Late night cafe talks and endless giggles',
      date: 'Sweet Memories',
      location: 'Favorite Cafe',
      tag: 'Laughter'
    },
    {
      id: 'photo-2',
      url: '/images/img3.jpeg',
      caption: 'Celebrating life’s little milestones together',
      date: 'Special Days',
      location: 'Weekend Getaway',
      tag: 'Celebration'
    },
    {
      id: 'photo-3',
      url: '/images/img4.jpeg',
      caption: 'Dressed up and glowing in pure confidence',
      date: 'Memories in Bloom',
      location: 'Lavender Garden',
      tag: 'Glow'
    },
    {
      id: 'photo-4',
      url: '/images/img5.jpeg',
      caption: 'Spontaneous road trips & seaside breeze',
      date: 'Adventure Time',
      location: 'By the Ocean',
      tag: 'Wanderlust'
    },
    {
      id: 'photo-5',
      url: '/images/img6.jpeg',
      caption: 'The warmest heart and sweetest soul',
      date: 'Forever Friends',
      location: 'Everywhere',
      tag: 'Pure Joy'
    },
    {
      id: 'photo-6',
      url: '/images/img7.jpeg',
      caption: 'Another beautiful memory to treasure',
      date: 'Golden Moments',
      location: 'Together',
      tag: 'Memories'
    }
  ],
  milestones: [
    {
      label: 'Years of Magic',
      value: '22',
      description: 'Years of brightening the world with your unique sparkle',
      icon: 'Sparkles'
    },
    {
      label: 'Days of Sunshine',
      value: '8,035+',
      description: 'Days spreading love, warmth, and radiant energy',
      icon: 'Sun'
    },
    {
      label: 'Moments of Joy',
      value: '192,840',
      description: 'Hours of unforgettable memories and heartfelt laughter',
      icon: 'Heart'
    },
    {
      label: 'Fabulous Index',
      value: '100%',
      description: 'Forever iconic, charming, and genuinely one-of-a-kind',
      icon: 'Crown'
    }
  ]
};

export const INITIAL_WISHES: Wish[] = [
  {
    id: 'wish-1',
    author: 'Sarah M.',
    relation: 'Best Friend 🌸',
    message: 'Happy 22nd birthday to my favorite human! Thank you for always listening to my 2 AM rambles and for being the truest friend. May this year bring you all the love you give so generously! Love you endlessly! 💕',
    avatarBg: 'from-purple-300 to-indigo-200',
    timestamp: 'Today, 9:30 AM',
    likes: 8,
    emoji: '💖'
  },
  {
    id: 'wish-2',
    author: 'Mom & Dad',
    relation: 'Family 🏡',
    message: 'Happy Birthday our precious Michelle! Watching you blossom into such a strong, caring, and beautiful young woman fills our hearts with pride every single day. Keep reaching for the stars! ✨',
    avatarBg: 'from-amber-200 to-purple-200',
    timestamp: 'Today, 8:15 AM',
    likes: 14,
    emoji: '🌟'
  },
  {
    id: 'wish-3',
    author: 'David K.',
    relation: 'College Bestie 🎓',
    message: 'Cheers to 22, Michelle! Wishing you ace exams, the yummiest matcha lattes, and zero stress. You are going to conquer this chapter! Have the absolute best birthday bash! 🎉🥂',
    avatarBg: 'from-violet-200 to-pink-200',
    timestamp: 'Today, 10:45 AM',
    likes: 5,
    emoji: '🥂'
  },
  {
    id: 'wish-4',
    author: 'Chloe & The Squad',
    relation: 'Soul Sisters 👯‍♀️',
    message: 'Happy 22nd birthday to our favorite girl! We cannot wait to celebrate with you tonight. Get ready for endless cake, bad dancing, and good vibes! Love you so much! 🎂🧁',
    avatarBg: 'from-fuchsia-200 to-purple-200',
    timestamp: 'Today, 11:20 AM',
    likes: 9,
    emoji: '🎂'
  }
];
