
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent relative z-10">
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-romantic text-red-500 mb-6 animate-pulse drop-shadow-2xl">
        For Muskan
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-rose-200 font-serif italic mb-10 max-w-lg md:max-w-2xl leading-relaxed">
        "A journey through the moments that made my heart beat only for you."
      </p>
      <button 
        onClick={onStart}
        className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-xl shadow-2xl shadow-red-900/50 transition-all transform hover:scale-110 active:scale-95 border-2 border-red-400 select-none"
      >
        ONLY FOR YOU ❤️
      </button>
    </div>
  );
};

export default Hero;
