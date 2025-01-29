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
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Frames</h2>
      {isPrintMode ? (
        // Print layout with preserved aspect ratio
        <div className="grid grid-cols-3 gap-4 w-full">
          {frames.map((frame, index) => (
            <div 
              key={index} 
              style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                width: '100%'
              }}
            >
              <Image
                src={frame.imageUrl}
                alt={frame.alt}
                fill
                style={{ 
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                }}
                sizes="33vw"
                priority
              />
            </div>
          ))}
        </div>
      ) : (
        // Web layout - responsive grid
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frames.map((frame, index) => (
            <div 
              key={index} 
              className="aspect-video relative rounded-xl overflow-hidden"
            >
              <Image
                src={frame.imageUrl}
                alt={frame.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { FramesGallery };