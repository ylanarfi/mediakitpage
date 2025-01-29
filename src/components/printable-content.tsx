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
    <div className="bg-gray-900 text-white p-8">
      {/* Profile Header for PDF */}
      <div className="mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={profile.avatar}
              alt={profile.username}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{profile.username}</h1>
            <p className="text-gray-400">{profile.description}</p>
          </div>
        </div>
      </div>

      {/* Social Stats */}
      <SocialStatsSection stats={profile.socialStats} />

      {/* Experiences */}
      <ExperiencesSection experiences={profile.experiences} />

      {/* Frames */}
      <FramesGallery frames={profile.frames} />

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-400">
        Generated on {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export { PrintableContent };