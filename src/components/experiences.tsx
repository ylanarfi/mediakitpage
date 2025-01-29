import { Experience } from '@/lib/types/stats';
import Image from 'next/image';
import Link from 'next/link';

interface ExperiencesProps {
  experiences: Experience[];
  isPrintMode?: boolean;
}

const ExperiencesSection: React.FC<ExperiencesProps> = ({ experiences, isPrintMode = false }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-black/20 rounded-xl overflow-hidden hover:bg-black/30 transition-colors">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.role} • {exp.date}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
              <p className="text-sm text-purple-400">VALORANT for {exp.game}</p>
              
              {!isPrintMode && (
                <Link 
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-4 py-2 text-center border border-gray-700 rounded-lg hover:bg-white/5 transition-all duration-200 hover:border-purple-500"
                >
                  Discover
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ExperiencesSection };