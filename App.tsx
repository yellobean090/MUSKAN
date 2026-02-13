
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import ValentineAsk from './components/ValentineAsk';
import FloatingHearts from './components/FloatingHearts';
import { Memory } from './types';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // PLACEHOLDER IMAGES: Replace these with actual images of MUSKAN!
  const memories: Memory[] = [
    { id: 1, url: 'https://picsum.photos/800/1000?random=1', caption: 'SWEET', date: 'FOREVER' },
    { id: 2, url: 'https://picsum.photos/800/1000?random=2', caption: 'That beautiful smile of yours.', date: 'KEEP SMILING' },
    { id: 3, url: 'https://picsum.photos/800/1000?random=3', caption: 'CUTE', date: 'ALWAYS' },
    { id: 4, url: 'https://picsum.photos/800/1000?random=4', caption: 'LOVELY', date: 'ALL THE TIME' },
    { id: 5, url: 'https://picsum.photos/800/1000?random=5', caption: 'SILLY', date: 'CRAZY' },
    { id: 6, url: 'https://picsum.photos/800/1000?random=6', caption: 'BEAUTIFUL', date: 'Than the world' },
  ];

  const handleStart = () => {
    setIsStarted(true);
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Fixed: Move useEffect out of the JSX return to avoid "void not assignable to ReactNode" error
  useEffect(() => {
    console.log("%cHey Dev!", "color: #f43f5e; font-size: 20px; font-weight: bold;");
    console.log("1. To add MUSKAN's real photos: Update the 'memories' array in App.tsx with direct links to her images.");
    console.log("2. Hosting Images: You can upload her photos to Cloudinary, Imgur, or Google Drive (get direct link) and use those URLs.");
    console.log("3. Deploy: Push this code to a GitHub repo and connect it to Vercel or Netlify. It's that simple!");
  }, []);

  return (
    <div className="min-h-screen bg-romantic-gradient text-white selection:bg-red-500 selection:text-white">
      <FloatingHearts />
      
      {!isStarted ? (
        <Hero onStart={handleStart} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Hero onStart={() => galleryRef.current?.scrollIntoView({ behavior: 'smooth' })} />
          
          <div ref={galleryRef}>
            <PhotoGallery memories={memories} />
          </div>
          
          <LoveLetter />
          
          <ValentineAsk />

          <footer className="py-10 text-center opacity-50 font-serif italic text-sm">
            Made with ❤️ for MUSKAN
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;