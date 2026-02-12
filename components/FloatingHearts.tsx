
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [...prev.slice(-15), { 
        id: Date.now(), 
        left: Math.random() * 100,
        delay: Math.random() * 2
      }]);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <div 
          key={heart.id}
          className="floating-heart text-red-500/30 text-2xl"
          style={{ 
            left: `${heart.left}%`, 
            animationDelay: `${heart.delay}s` 
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
