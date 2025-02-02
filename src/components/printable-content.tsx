import { UserProfile } from '@/lib/types/stats';
import { SocialStatsSection } from './social-stats';
import { ExperiencesSection } from './experiences';
import { FramesGallery } from './frames-gallery';
import Image from 'next/image';

interface PrintableContentProps {
  profile: UserProfile;
}

const PrintableContent: React.FC<PrintableContentProps> = ({ profile }) => {
  return (
    <div className="bg-gray-900 text-white max-w-5xl mx-auto">
      {/* Banner - Compact height */}
      <div className="relative w-full" style={{ height: '90px' }}>
        <Image
          src="/images/banner.png"
          alt="Profile Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center -mt-8 relative z-10 mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-black bg-black relative">
          <Image
            src={profile.avatar}
            alt={profile.username}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center mt-2">
          <h1 className="text-xl font-bold">{profile.username}</h1>
          <p className="text-gray-400 mt-1 text-sm">{profile.description}</p>
        </div>
      </div>

      {/* Main Content - Tighter spacing for PDF */}
      <div className="px-4">
        {/* Social Stats */}
        <div className="mb-3">
          <SocialStatsSection stats={profile.socialStats} isPrintMode={true} />
        </div>

        {/* Experiences */}
        <div className="mb-3">
          <ExperiencesSection experiences={profile.experiences} isPrintMode={true} />
        </div>

        {/* Frames */}
        <div className="mb-4">
          <FramesGallery frames={profile.frames} isPrintMode={true} />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 py-3 border-t border-gray-800">
          © 2025 Media Kit Page. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export { PrintableContent };