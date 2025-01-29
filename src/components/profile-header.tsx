import Image from 'next/image';
import Link from 'next/link';
import { UserProfile } from '@/lib/types/stats';

interface ProfileHeaderProps {
  profile: UserProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="h-48 relative rounded-lg overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Profile Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Profile Info */}
      <div className="relative -mt-16 px-6">
        <div className="flex items-end space-x-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-black bg-black">
            <Image
              src={profile.avatar}
              alt={profile.username}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="pb-4">
            <h1 className="text-3xl font-bold">{profile.username}</h1>
            <p className="text-gray-400 mt-1">{profile.description}</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4 mt-4">
          <Link
            href="mailto:contact@domain.com"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors duration-200 inline-flex items-center"
          >
            📥 Inbox
          </Link>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full transition-colors duration-200">
            🟢 Available
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors duration-200">
            📄 PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileHeader };