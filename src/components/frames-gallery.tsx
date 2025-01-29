import Image from 'next/image';

interface FramesGalleryProps {
  frames: {
    imageUrl: string;
    alt: string;
  }[];
}

const FramesGallery: React.FC<FramesGalleryProps> = ({ frames }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Frames</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {frames.map((frame, index) => (
          <div key={index} className="aspect-video relative rounded-xl overflow-hidden">
            <Image
              src={frame.imageUrl}
              alt={frame.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { FramesGallery };