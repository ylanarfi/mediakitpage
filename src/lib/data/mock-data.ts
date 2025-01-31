import { UserProfile } from '../types/stats';

export const mockProfile: UserProfile = {
  username: 'JA2',
  // Using direct country code flag emojis for better compatibility
  description: '21 \u{1F1EB}\u{1F1F7} | F/A dash in site for ??',
  avatar: '/images/profile.jpg',
  socialStats: [
    {
      platform: 'TikTok',
      handle: '@iamja2_ duelist main imm3',
      profileUrl: 'https://tiktok.com/@iamja2_',
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
      profileUrl: 'https://x.com/iamja2_',
      stats: {
        followers: 928,
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
      profileUrl: 'https://twitch.tv/iamja2',
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
      role: '🏆3rd',
      date: 'October 2024',
      game: 'NYAN',
      description: '',
      imageUrl: '/images/experiences/lioness.jpg',
      url: 'https://www.vlr.gg/event/2237/lioness-cup-2024'
    },
    {
      title: 'GC 2024 EMEA: Contenders S2',
      role: 'Playoffs 5h-6th',
      date: 'July 2024',
      game: 'charbon',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/2100/game-changers-2024-emea-contenders-series-2'
    },
    {
      title: 'GC 2024 France: S2',
      role: '🏆1st',
      date: 'June 2024',
      game: 'charbon',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/2121/game-changers-2024-france-series-2'
    },
    {
      title: 'GC 2024 EMEA: Contenders S1',
      role: 'Groupe Stage 17h-24th',
      date: 'April 2024',
      game: 'Huge Esport',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/2015/game-changers-2024-emea-contenders-series-1'
    },
    {
      title: 'GC 2024 France: S1',
      role: 'Playoffs🏆2nd',
      date: 'March 2024',
      game: 'Huge Esport',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/2041/game-changers-2024-france-series-1'
    },
    {
      title: 'GC EMEA Contenders S3',
      role: 'Playoffs 25h-32th',
      date: 'October 2023',
      game: 'SFAM GC',
      description: '',
      imageUrl: '/images/experiences/contenders.jpg',
      url: 'https://www.vlr.gg/event/1835/game-changers-emea-contenders-series-3'
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