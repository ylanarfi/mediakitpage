import { UserProfile } from '../types/stats';

export const mockProfile: UserProfile = {
  username: 'JA2',
  // Using direct country code flag emojis for better compatibility
  description: '21 \u{1F1EB}\u{1F1F7} | F/A dash in site for ( streaming sometimes )',
  avatar: '/images/profile.jpg',
  socialStats: [
    {
      platform: 'TikTok',
      handle: '@iamja2_ duelist main imm3',
      stats: {
        followers: 6800,
        likes: 161800,
        views: 375000,
      },
      growth: {
        followers: 12,
        likes: 44,
        views: 34,
      },
    },
    {
      platform: 'X',
      handle: 'F/A dash in site for ??',
      stats: {
        followers: 909000,
        posts: 1800,
        likes: 16600,
      },
      growth: {
        followers: 344,
        posts: 12,
        likes: -65,
      },
    },
    {
      platform: 'Twitch',
      handle: 'Joueuse valorant - main duelist immo',
      stats: {
        followers: 2400,
        averageViewers: 45.6,
        hoursStreamed: 15.7,
      },
      growth: {
        followers: 44,
        averageViewers: 22,
        hoursStreamed: -17,
      },
    },
  ],
  experiences: [
    {
      title: 'Lioness Cup 2024',
      role: '3rd',
      date: 'October 2024',
      game: 'NYAN',
      description: '',
      imageUrl: '/images/experiences/lioness.jpg',
      url: 'https://www.vlr.gg/event/2237/lioness-cup-2024'
    },
    {
      title: 'GC 2024 EMEA: Contenders Series 2',
      role: 'Playoffs 5h-6th',
      date: 'July 2024',
      game: 'charbon',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/2100/game-changers-2024-emea-contenders-series-2'
    },
    {
      title: 'GC 2024 France: Series 2',
      role: '1st',
      date: 'June 2024',
      game: 'charbon',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/2121/game-changers-2024-france-series-2'
    },
  ],
  frames: [
    {
      imageUrl: '/images/frames/frame1.jpg',
      alt: 'Gaming setup shot',
    },
    {
      imageUrl: '/images/frames/frame2.jpg',
      alt: 'Tournament play',
    },
    {
      imageUrl: '/images/frames/frame3.jpg',
      alt: 'Team celebration',
    },
  ],
};