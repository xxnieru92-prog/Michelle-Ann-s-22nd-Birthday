import { BirthdayContent, Wish } from '../types';

export const DEFAULT_BIRTHDAY_CONTENT: BirthdayContent = {
  recipientName: 'Mitch',
  nickname: 'Mimi',
  age: 22,
  heroHeadline: 'Happy 22nd Birthday, Mitch! 🎂✨',
  heroSubheadline: 'Celebrating 22 wonderful years of your radiant smile, gentle kindness, and boundless grace.',
  // Elegant aesthetic portrait placeholder with soft lavender/natural tones
  portraitUrl: '/images/img1.jpeg',
  letterHeadline: 'A Letter for Your 22nd Chapter',
  letterGreeting: 'Dearest Mitch,',
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
      url: '/images/vid1-web.mp4',
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
    author: 'Sophia',
    relation: 'Cousin / Beshie',
    message: 'Myyy Pichelle ay este Michelle Ann HAPPY HAPPY BIRTHDAY. Grabe 22 na ikaw🥹 Always remember, Ate Eunice is always available in case you need help(wag lang problema sa pera😌). Pero sa ibang problema, andito lang ako para makinig sa rants mo at mag bigay ng payo. Tayo tayo nalang talaga mag dadamayan sa kalagayan naten🫶Keep chasing your dreams, my Michelle, I’m rooting for you. Any challenges that come your way only mean that God is preparing you for His greater plan. Every challenge has a reason, and part of that reason is to make you a stronger person.Happy birthday ulit and more more more birthdays to come. Marami pa tayong iboblow na candle 😉',
    avatarBg: 'from-violet-200 to-pink-200',
    timestamp: 'Today, 10:45 AM',
    likes: 67,
    emoji: '🥂'
  },
  {
    id: 'wish-2',
    author: 'Sapphire',
    relation: 'Highschool Bestie 🏡',
    message: 'Happy 22nd birthday, Mishela! I hope you’re doing well and that this new chapter of your life brings you lots of happiness, growth, and beautiful memories. Despite everything, I’ll always be grateful for the memories and moments we shared. Just know that I’m still rooting for you, even from a distance, and I genuinely wish nothing but good things for you. Ily1!',
    avatarBg: 'from-amber-200 to-purple-200',
    timestamp: 'Today, 8:15 AM',
    likes: 57,
    emoji: '💖'
  },
  {
    id: 'wish-3',
    author: 'Mike Francis',
    relation: 'Kuya',
    message: 'Hello bunso its a me kuya franz haha anyway happy birthday hehe wish ko para sayo is sana mag ingat ka permi and wag maging naive sa mga choices mo sa buhay and sana maging masaya kana ngayon at sa susunod na page na ng buhay mo yun lang happy birthday to you ulit bunso ily',
    avatarBg: 'from-purple-300 to-indigo-200',
    timestamp: 'Today, 9:30 AM',
    likes: 25,
    emoji: '🌟'
  },
  {
    id: 'wish-3',
    author: 'PAX',
    relation: 'basta',
    message: 'ily',
    avatarBg: 'from-purple-300 to-indigo-200',
    timestamp: 'Today, 9:30 AM',
    likes: 9999999999,
    emoji: '🌟'
  }
];
