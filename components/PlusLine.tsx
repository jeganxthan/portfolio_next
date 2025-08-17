'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PlusLine: React.FC = () => {
  const line = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (line.current) {
        gsap.fromTo(
          line.current,
          { width: '0%' },
          { width: '95%', duration: 2, ease: 'power2.inOut' }
        );
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 mt-2">
      <div className="text-xs">+</div>
      <div
        ref={line}
        className="bg-black"
        style={{ transform: 'scaleY(0.5)', height: '1px', width: '0%' }}
      ></div>
      <div className="text-xs">+</div>
    </div>
  );
};

export default PlusLine;
