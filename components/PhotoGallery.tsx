
import React from 'react';
import { Memory } from '../types';

interface GalleryProps {
  memories: Memory[];
}

const PhotoGallery: React.FC<GalleryProps> = ({ memories }) => {
  return (
    <div className="py-16 px-6 md:px-20 bg-transparent relative z-10">
      <h2 className="text-4xl md:text-6xl font-romantic text-rose-300 text-center mb-12 drop-shadow-md">
        Our Beautiful Memories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {memories.map((memory) => (
          <div 
            key={memory.id} 
            className="group relative overflow-hidden rounded-3xl border border-rose-900/40 bg-rose-950/10 backdrop-blur-md transition-all hover:scale-[1.03] hover:border-rose-500/50 shadow-xl"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img 
                src={memory.url} 
                alt={memory.caption} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <p className="text-white font-serif text-lg md:text-xl mb-1">{memory.caption}</p>
              <span className="text-rose-300/80 text-sm font-light italic">{memory.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-rose-400 italic font-serif text-lg">...and many more yet to be made.</p>
      </div>
    </div>
  );
};

export default PhotoGallery;
