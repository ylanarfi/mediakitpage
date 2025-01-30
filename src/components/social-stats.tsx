import { SocialStats } from '@/lib/types/stats';
import { StatCard } from './ui/stat-card';
import Image from 'next/image';

interface SocialStatsProps {
  stats: SocialStats[];
  isPrintMode?: boolean;
}

export const SocialStatsSection: React.FC<SocialStatsProps> = ({ stats, isPrintMode = false }) => {
  return (
    <div className="space-y-8 mt-8">
      {stats.map((platform, platformIndex) => (
        <div 
          key={platformIndex} 
          className="bg-black/20 rounded-xl p-6 transform opacity-0 animate-fade-in"
          style={{ animationDelay: `${platformIndex * 200}ms`, animationFillMode: 'forwards' }}
        >
          <div className="flex items-center space-x-4 mb-6">
            {/* Platform Icon */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Image
                src={isPrintMode ? 
                  `/images/social/${platform.platform.toLowerCase()}.png` : 
                  `/icons/${platform.platform.toLowerCase()}.svg`}
                alt={platform.platform}
                width={24}
                height={24}
              />
            </div>
            
            {/* Platform Info */}
            <div>
              <h3 className="text-xl font-bold">{platform.platform}</h3>
              <p className="text-gray-400 text-sm">{platform.handle}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              label="Followers"
              value={platform.stats.followers}
              growth={platform.growth.followers}
              delay={platformIndex * 200}
            />
            
            {platform.platform === 'TikTok' && (
              <>
                <StatCard
                  label="Likes"
                  value={platform.stats.likes || 0}
                  growth={platform.growth.likes}
                  delay={platformIndex * 200 + 100}
                />
                <StatCard
                  label="Views"
                  value={platform.stats.views || 0}
                  growth={platform.growth.views}
                  delay={platformIndex * 200 + 200}
                />
              </>
            )}
            
            {platform.platform === 'X' && (
              <>
                <StatCard
                  label="Posts"
                  value={platform.stats.posts || 0}
                  growth={platform.growth.posts}
                  delay={platformIndex * 200 + 100}
                />
                <StatCard
                  label="Likes"
                  value={platform.stats.likes || 0}
                  growth={platform.growth.likes}
                  delay={platformIndex * 200 + 200}
                />
              </>
            )}
            
            {platform.platform === 'Twitch' && (
              <>
                <StatCard
                  label="Average Viewers"
                  value={platform.stats.averageViewers || 0}
                  growth={platform.growth.averageViewers}
                  delay={platformIndex * 200 + 100}
                />
                <StatCard
                  label="Hours Streamed"
                  value={platform.stats.hoursStreamed || 0}
                  growth={platform.growth.hoursStreamed}
                  delay={platformIndex * 200 + 200}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};