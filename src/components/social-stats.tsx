import { SocialStats } from '@/lib/types/stats';
import { StatCard } from './ui/stat-card';
import Image from 'next/image';
import Link from 'next/link';

interface SocialStatsProps {
  stats: SocialStats[];
  isPrintMode?: boolean;
}

export const SocialStatsSection: React.FC<SocialStatsProps> = ({ stats, isPrintMode = false }) => {
  // Helper function to render stats grid
  const renderStatsGrid = (platform: SocialStats) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Followers"
        value={platform.stats.followers}
        growth={platform.growth.followers}
        delay={200}
        isPrintMode={isPrintMode}
      />
      
      {platform.platform === 'TikTok' && (
        <>
          <StatCard
            label="Likes"
            value={platform.stats.likes || 0}
            growth={platform.growth.likes}
            delay={300}
            isPrintMode={isPrintMode}
          />
          <StatCard
            label="Views"
            value={platform.stats.views || 0}
            growth={platform.growth.views}
            delay={400}
            isPrintMode={isPrintMode}
          />
        </>
      )}
      
      {platform.platform === 'X' && (
        <>
          <StatCard
            label="Posts"
            value={platform.stats.posts || 0}
            growth={platform.growth.posts}
            delay={300}
            isPrintMode={isPrintMode}
          />
          <StatCard
            label="Likes"
            value={platform.stats.likes || 0}
            growth={platform.growth.likes}
            delay={400}
            isPrintMode={isPrintMode}
          />
        </>
      )}
      
      {platform.platform === 'Twitch' && (
        <>
          <StatCard
            label="Average Viewers"
            value={platform.stats.averageViewers || 0}
            growth={platform.growth.averageViewers}
            delay={300}
            isPrintMode={isPrintMode}
          />
          <StatCard
            label="Hours Streamed"
            value={platform.stats.hoursStreamed || 0}
            growth={platform.growth.hoursStreamed}
            delay={400}
            isPrintMode={isPrintMode}
          />
        </>
      )}
    </div>
  );

  const ContentWrapper = ({ children, platform }: { children: React.ReactNode, platform: SocialStats }) => {
    if (isPrintMode) {
      return <div>{children}</div>;
    }
    
    return (
      <Link 
        href={platform.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="space-y-8 mt-8">
      {stats.map((platform, platformIndex) => (
        <ContentWrapper key={platformIndex} platform={platform}>
          <div 
            className={`bg-black/20 rounded-xl p-6 ${
              isPrintMode 
                ? 'opacity-100'
                : 'transform opacity-0 animate-fade-in hover:bg-black/30 transition-all duration-300'
            }`}
            style={!isPrintMode ? { animationDelay: `${platformIndex * 200}ms`, animationFillMode: 'forwards' } : undefined}
          >
            {/* Platform Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ${
                isPrintMode ? '' : 'group-hover:scale-110 transition-transform duration-300'
              }`}>
                <Image
                  src={isPrintMode ? 
                    `/images/social/${platform.platform.toLowerCase()}.png` : 
                    `/icons/${platform.platform.toLowerCase()}.svg`}
                  alt={platform.platform}
                  width={24}
                  height={24}
                  className={isPrintMode ? '' : 'group-hover:opacity-90 transition-opacity duration-300'}
                />
              </div>
              
              <div>
                <h3 className={`text-xl font-bold ${
                  isPrintMode ? '' : 'group-hover:text-purple-400 transition-colors duration-300'
                }`}>
                  {platform.platform}
                </h3>
                <p className={`text-gray-400 text-sm ${
                  isPrintMode ? '' : 'group-hover:text-gray-300 transition-colors duration-300'
                }`}>
                  {platform.handle}
                </p>
              </div>

              {!isPrintMode && (
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-purple-400 text-sm">Visit Profile →</span>
                </div>
              )}
            </div>

            {/* Stats Grid */}
            {renderStatsGrid(platform)}
          </div>
        </ContentWrapper>
      ))}
    </div>
  );
};