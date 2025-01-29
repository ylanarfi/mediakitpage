import { ProfileHeader } from '@/components/profile-header';
import { SocialStatsSection } from '@/components/social-stats';
import { ExperiencesSection } from '@/components/experiences';
import { FramesGallery } from '@/components/frames-gallery';
import { mockProfile } from '@/lib/data/mock-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProfileHeader profile={mockProfile} />
        <SocialStatsSection stats={mockProfile.socialStats} />
        <ExperiencesSection experiences={mockProfile.experiences} />
        <FramesGallery frames={mockProfile.frames} />
        
        <footer className="mt-12 py-6 text-center text-gray-400 text-sm">
          © 2025 Media Gear Inc. All rights reserved.
        </footer>
      </div>
    </main>
  );
}