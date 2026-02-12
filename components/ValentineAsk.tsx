
import React, { useState } from 'react';

const ValentineAsk: React.FC = () => {
  const [responded, setResponded] = useState(false);
  const [noPos, setNoPos] = useState({ top: 'auto', left: 'auto' });

  const moveNoButton = () => {
    // Keep the button within visible bounds (10% to 80% of viewport)
    const randomTop = Math.floor(Math.random() * 70) + 10;
    const randomLeft = Math.floor(Math.random() * 70) + 10;
    setNoPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  if (responded) {
    return (
      <div className="py-40 px-6 text-center animate-bounce flex flex-col items-center justify-center">
        <h2 className="text-7xl md:text-9xl font-romantic text-red-500 mb-6 drop-shadow-xl">YES! ❤️</h2>
        <p className="text-2xl md:text-4xl text-rose-200 font-serif italic">I love you more than words can say, Muskan!</p>
        <div className="mt-8 text-5xl">🌹✨💖</div>
      </div>
    );
  }

  return (
    <div className="py-32 px-6 text-center relative z-10 min-h-[600px] flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-5xl md:text-8xl font-romantic text-rose-100 mb-16 drop-shadow-lg max-w-2xl">
        Will you be my Valentine, Muskan?
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full max-w-sm mx-auto">
        <button 
          onClick={() => setResponded(true)}
          className="w-full sm:w-auto px-16 py-7 bg-red-600 hover:bg-red-500 text-white rounded-3xl text-4xl font-bold shadow-2xl transition-all transform hover:scale-125 z-20 select-none active:scale-110"
        >
          YES!
        </button>
        <button 
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          style={{ 
            position: noPos.top === 'auto' ? 'relative' : 'fixed', 
            top: noPos.top, 
            left: noPos.left,
            transition: 'all 0.2s ease-out'
          }}
          className="w-full sm:w-auto px-10 py-5 bg-gray-900/80 backdrop-blur-sm text-gray-500 rounded-2xl text-xl font-bold border border-gray-700 select-none pointer-events-auto"
        >
          No
        </button>
      </div>
      <p className="mt-20 text-rose-400/40 font-serif italic text-sm">(You can't say no, Muskan... try it! 😉)</p>
    </div>
  );
};

export default ValentineAsk;
