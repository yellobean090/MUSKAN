
import React, { useState } from 'react';
import { generateRomanticPoem } from '../services/geminiService';

const LoveLetter: React.FC = () => {
  const [poem, setPoem] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState("Sweet");

  const moods = ["Sweet", "Passionate", "Playful", "Classic"];

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateRomanticPoem(mood);
    setPoem(result);
    setLoading(false);
  };

  return (
    <div className="py-20 px-6 bg-rose-950/30 backdrop-blur-lg relative z-10 border-t border-b border-rose-900/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-romantic text-rose-200 mb-10">
          A Message For You
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {moods.map(m => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={`px-5 py-2.5 rounded-full border text-sm md:text-base transition-all duration-300 ${mood === m ? 'bg-rose-600 border-rose-400 text-white shadow-lg shadow-rose-900/50' : 'bg-rose-900/20 border-rose-800 text-rose-400 hover:border-rose-600'}`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="min-h-[250px] flex items-center justify-center p-6 md:p-12 bg-black/50 rounded-[2.5rem] border border-rose-900/30 mb-10 relative overflow-hidden shadow-inner">
          {loading ? (
            <div className="text-rose-400 animate-pulse flex flex-col items-center">
               <div className="w-14 h-14 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mb-4"></div>
               <span className="font-serif italic text-lg">Thinking of the right words...</span>
            </div>
          ) : poem ? (
            <p className="text-2xl md:text-4xl font-romantic text-rose-100 italic leading-relaxed whitespace-pre-wrap animate-in fade-in zoom-in duration-500">
              "{poem}"
            </p>
          ) : (
            <p className="text-rose-400/60 font-serif italic text-lg">Pick a mood and let me speak from the heart.</p>
          )}
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="px-12 py-5 bg-rose-700 hover:bg-rose-800 text-white rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 select-none"
        >
          {poem ? "Another One? 💝" : "Speak to MUSKAN 🌹"}
        </button>
      </div>
    </div>
  );
};

export default LoveLetter;
