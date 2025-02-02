import Image from 'next/image';

interface FramesGalleryProps {
  frames: {
    imageUrl: string;
    alt: string;
  }[];
  isPrintMode?: boolean;
}

const FramesGallery: React.FC<FramesGalleryProps> = ({ frames, isPrintMode = false }) => {
  return (
    <div className={`${isPrintMode ? 'mt-4' : 'mt-12'}`}>
      {/* Title only shown in web view */}
      {!isPrintMode && <h2 className="text-2xl font-bold mb-6">Frames</h2>}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {frames.map((frame, index) => (
          <div 
            key={index} 
            className="relative rounded-xl overflow-hidden bg-black/20"
          >
            {/* Container with consistent 16:9 ratio for both web and PDF */}
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
                className={`${!isPrintMode && 'hover:scale-105 transition-transform duration-300'}`}
                sizes={isPrintMode ? "200px" : "(max-width: 768px) 100vw, 33vw"}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FramesGallery };