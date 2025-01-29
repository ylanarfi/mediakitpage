'use client';

import { ProfileHeader } from '@/components/profile-header';
import { SocialStatsSection } from '@/components/social-stats';
import { ExperiencesSection } from '@/components/experiences';
import { FramesGallery } from '@/components/frames-gallery';
import { PrintableContent } from '@/components/printable-content';
import { mockProfile } from '@/lib/data/mock-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProfileHeader profile={mockProfile} />
        
        {/* Main visible content */}
        <SocialStatsSection stats={mockProfile.socialStats} />
        <ExperiencesSection experiences={mockProfile.experiences} />
        <FramesGallery frames={mockProfile.frames} />
        
        {/* Hidden printable content */}
        <div id="printable-content" className="hidden">
          <PrintableContent profile={mockProfile} />
        </div>
        
        <footer className="mt-12 py-6 text-center text-gray-400 text-sm">
          © 2025 Media Kit Page. All rights reserved.
        </footer>
      </div>
    </main>
  );
}