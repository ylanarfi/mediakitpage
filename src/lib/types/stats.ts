export interface SocialStats {
    platform: 'TikTok' | 'X' | 'Twitch';
    handle: string;
    stats: {
      followers: number;
      likes?: number;
      views?: number;
      posts?: number;
      averageViewers?: number;
      hoursStreamed?: number;
    };
    growth: {
      followers: number;
      likes?: number;
      views?: number;
      posts?: number;
      averageViewers?: number;
      hoursStreamed?: number;
    };
  }
  
  export interface Experience {
    title: string;
    role: string;
    date: string;
    game: string;
    description: string;
    imageUrl: string;
    url: string;  // Added URL property
  }
  
  export interface UserProfile {
    username: string;
    description: string;
    avatar: string;
    socialStats: SocialStats[];
    experiences: Experience[];
    frames: {
      imageUrl: string;
      alt: string;
    }[];
  }