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
      {!isPrintMode && (
        <h2 className="text-2xl font-bold mb-6 animate-fade-in">Experiences</h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`
              bg-black/20 rounded-xl overflow-hidden 
              ${!isPrintMode ? `
                opacity-0 animate-fade-in hover:bg-black/30 
                transform hover:translate-y-[-4px] hover:shadow-xl
                transition-all duration-300 ease-in-out
                cursor-pointer
              ` : ''}
            `}
            style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
          >
            <div className="p-4 relative group">
              {/* Hover gradient effect */}
              {!isPrintMode && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/5 transition-all duration-300" />
              )}

              {/* Experience Header */}
              <div className="flex items-center space-x-3 mb-4 relative">
                <div className={`
                  w-12 h-12 relative rounded-lg overflow-hidden flex items-center justify-center bg-black/40
                  ${!isPrintMode ? 'group-hover:scale-110 transition-transform duration-300' : ''}
                `}>
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className={`
                    font-bold
                    ${!isPrintMode ? 'group-hover:text-purple-400 transition-colors duration-300' : ''}
                  `}>
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.role} • {exp.date}</p>
                </div>
              </div>
              
              {/* Experience Content */}
              <p className={`
                text-sm text-gray-300 mb-4
                ${!isPrintMode ? 'group-hover:text-gray-200 transition-colors duration-300' : ''}
              `}>
                {exp.description}
              </p>
              <p className={`
                text-sm text-purple-400
                ${!isPrintMode ? 'group-hover:text-purple-300 transition-colors duration-300' : ''}
              `}>
                VALORANT for {exp.game}
              </p>
              
              {/* Discover Button */}
              {!isPrintMode && (
                <Link 
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full mt-4 py-2 text-center 
                    border border-gray-700 rounded-lg 
                    transition-all duration-300 
                    opacity-0 group-hover:opacity-100 
                    translate-y-2 group-hover:translate-y-0
                    bg-black/0 hover:bg-purple-600/20
                    hover:border-purple-500
                  "
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