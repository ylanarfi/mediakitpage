import Image from 'next/image';
import Link from 'next/link';
import { UserProfile } from '@/lib/types/stats';
import { useCallback, useState, useEffect } from 'react';
import { exportToPDF } from '@/lib/utils/pdf-export';

interface ProfileHeaderProps {
  profile: UserProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleExportPDF = useCallback(async () => {
    if (isExporting) return;

    try {
      setIsExporting(true);
      const element = document.getElementById('printable-content');
      if (!element) {
        throw new Error('Content element not found');
      }
      await exportToPDF(element, profile.username);
    } catch (error) {
      console.error('Failed to export PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [profile.username, isExporting]);

  const renderDescription = () => {
    return (
      <span className="inline-flex items-center whitespace-nowrap">
        21{' '}
        {isMobile ? (
          <span className="inline-flex items-center mx-1 translate-y-[-1px]">🇫🇷</span>
        ) : (
          <span className="inline-flex items-center mx-1">
            <Image
              src="/images/flags/fr-flag.svg"
              alt="FR"
              width={20}
              height={14}
              className="inline-block"
            />
          </span>
        )}
        {' '}| F/A dash in site for ??
      </span>
    );
  };

  return (
    <div className="relative">
      {/* Banner Image with fade-in animation */}
      <div className="h-48 sm:h-64 relative rounded-lg overflow-hidden animate-fade-in">
        <Image
          src="/images/banner.png"
          alt="Profile Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Profile Info - Centered Layout */}
      <div className="relative px-6 flex flex-col items-center">
        {/* Profile Picture with scale-in animation */}
        <div className="relative -mt-16 sm:-mt-20 animate-scale-in delay-200">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-black bg-black hover:scale-105 transition-transform duration-300">
            <Image
              src={profile.avatar}
              alt={profile.username}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Profile Text with slide-in animation */}
        <div className="mt-4 sm:mt-6 text-center animate-slide-in delay-300">
          <h1 className="text-3xl sm:text-4xl font-bold hover:text-purple-400 transition-colors duration-300">
            {profile.username}
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl mx-auto inline-flex items-center justify-center">
            {renderDescription()}
          </p>
        </div>
        
        {/* Action Buttons Container with Additional Padding */}
        <div className="w-full pt-4 pb-6 animate-fade-in delay-400">
          {/* Action Buttons with Fixed Height and Transform Origin */}
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <Link
              href="mailto:contact@ja2gaming.com"
              className="flex-none bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded-full transition-all duration-200 inline-flex items-center text-sm sm:text-base hover:scale-105 origin-center"
            >
              📥 Inbox
            </Link>
            <button 
              className="flex-none bg-green-600 hover:bg-green-700 px-4 sm:px-6 py-2 rounded-full transition-all duration-200 text-sm sm:text-base hover:scale-105 origin-center"
            >
              🟢 Available
            </button>
            <button 
              onClick={handleExportPDF}
              disabled={isExporting}
              className="flex-none bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base hover:scale-105 origin-center"
            >
              {isExporting ? 'Generating...' : '📄 PDF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };