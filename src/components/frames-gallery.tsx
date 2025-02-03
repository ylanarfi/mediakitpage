import Image from 'next/image';
import { useState } from 'react';
import { ImageModal } from './ui/image-modal';

interface FramesGalleryProps {
  frames: {
    imageUrl: string;
    alt: string;
  }[];
  isPrintMode?: boolean;
}

const FramesGallery: React.FC<FramesGalleryProps> = ({ frames, isPrintMode = false }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <>
      <div className={`${isPrintMode ? 'mt-4' : 'mt-12'}`}>
        {!isPrintMode && <h2 className="text-2xl font-bold mb-6">Frames</h2>}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frames.map((frame, index) => (
            <div 
              key={index} 
              className={`
                relative rounded-xl overflow-hidden bg-black/20 group cursor-pointer
                ${!isPrintMode && 'hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500'}
              `}
              onClick={() => !isPrintMode && setSelectedImage({ url: frame.imageUrl, alt: frame.alt })}
            >
              {/* Container with consistent 16:9 ratio */}
              <div 
                className="relative w-full" 
                style={{ paddingBottom: '56.25%' }}
              >
                <Image
                  src={frame.imageUrl}
                  alt={frame.alt}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  className={`
                    ${!isPrintMode ? `
                      transform transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-1
                    ` : ''}
                  `}
                  sizes={isPrintMode ? "200px" : "(max-width: 768px) 100vw, 33vw"}
                  priority
                />

                {/* Hover Overlay */}
                {!isPrintMode && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-4 py-2 rounded-full 
                      bg-purple-600/80 transform translate-y-4 group-hover:translate-y-0 
                      transition-transform duration-300 pointer-events-none">
                      Click to expand
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          imageUrl={selectedImage.url}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export { FramesGallery };