import { SocialStats } from '@/lib/types/stats';
import { StatCard } from './ui/stat-card';
import Image from 'next/image';
import Link from 'next/link';

interface SocialStatsProps {
  stats: SocialStats[];
  isPrintMode?: boolean;
}

export const SocialStatsSection: React.FC<SocialStatsProps> = ({ stats, isPrintMode = false }) => {
  return (
    <div className="space-y-8 mt-8">
      {stats.map((platform, platformIndex) => (
        <Link 
          key={platformIndex}
          href={platform.platform === 'TikTok' ? 'https://tiktok.com/@jamja2' :
                platform.platform === 'X' ? 'https://twitter.com/ja2' :
                'https://twitch.tv/ja2'}
          target="_blank"
          rel="noopener noreferrer" 
          className="block group"
        >
          <div 
            className={`
              bg-black/20 rounded-xl p-6 transform relative
              ${!isPrintMode && 'opacity-0 animate-fade-in hover:bg-black/30 transition-all duration-300'}
            `}
            style={{ 
              animationDelay: `${platformIndex * 200}ms`, 
              animationFillMode: 'forwards' 
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={isPrintMode ? 
                      `/images/social/${platform.platform.toLowerCase()}.png` : 
                      `/icons/${platform.platform.toLowerCase()}.svg`}
                    alt={platform.platform}
                    width={24}
                    height={24}
                    className="transition-transform duration-300"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">
                    {platform.platform}
                  </h3>
                  <p className="text-gray-400 text-sm">{platform.handle}</p>
                </div>
              </div>

              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-400">
                Visit Profile →
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                label="Followers"
                value={platform.stats.followers}
                growth={platform.growth.followers}
              />
              
              {platform.platform === 'TikTok' && (
                <>
                  <StatCard
                    label="Likes"
                    value={platform.stats.likes || 0}
                    growth={platform.growth.likes}
                  />
                  <StatCard
                    label="Views"
                    value={platform.stats.views || 0}
                    growth={platform.growth.views}
                  />
                </>
              )}
              
              {platform.platform === 'X' && (
                <>
                  <StatCard
                    label="Posts"
                    value={platform.stats.posts || 0}
                    growth={platform.growth.posts}
                  />
                  <StatCard
                    label="Likes"
                    value={platform.stats.likes || 0}
                    growth={platform.growth.likes}
                  />
                </>
              )}
              
              {platform.platform === 'Twitch' && (
                <>
                  <StatCard
                    label="Average Viewers"
                    value={platform.stats.averageViewers || 0}
                    growth={platform.growth.averageViewers}
                  />
                  <StatCard
                    label="Hours Streamed"
                    value={platform.stats.hoursStreamed || 0}
                    growth={platform.growth.hoursStreamed}
                  />
                </>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};