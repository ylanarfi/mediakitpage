import { SocialStats } from '@/lib/types/stats';
import { StatCard } from './ui/stat-card';
import Image from 'next/image';

interface SocialStatsProps {
  stats: SocialStats[];
}

const SocialStatsSection: React.FC<SocialStatsProps> = ({ stats }) => {
  return (
    <div className="space-y-8 mt-8">
      {stats.map((platform, index) => (
        <div key={index} className="bg-black/20 rounded-xl p-6">
          <div className="flex items-center space-x-4 mb-6">
            {/* Platform Icon */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Image
                src={`/icons/${platform.platform.toLowerCase()}.svg`}
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
      ))}
    </div>
  );
};

export { SocialStatsSection };