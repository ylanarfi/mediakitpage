'use client';

import { ProfileHeader } from '@/components/profile-header';
import { SocialStatsSection } from '@/components/social-stats';
import { ExperiencesSection } from '@/components/experiences';
import { FramesGallery } from '@/components/frames-gallery';
import { PrintableContent } from '@/components/printable-content';
import { mockProfile } from '@/lib/data/mock-data';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProfileHeader profile={mockProfile} />
        <SocialStatsSection stats={mockProfile.socialStats} />
        <ExperiencesSection experiences={mockProfile.experiences} />
        <FramesGallery frames={mockProfile.frames} />
        
        {/* Hidden printable content */}
        <div id="printable-content" className="hidden">
          <PrintableContent profile={mockProfile} />
        </div>
        
        <footer className="mt-12 py-6 text-center text-[rgb(var(--text-secondary))] text-sm">
          © 2025 Media Gear Inc. All rights reserved.
        </footer>
      </div>
    </main>
  );
}