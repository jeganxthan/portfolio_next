'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoadingCounterProps {
  onComplete?: () => void;
}

const LoadingCounter: React.FC<LoadingCounterProps> = ({ onComplete }) => {
  const [count, setCount] = useState(1);
  const countRef = useRef({ value: 1 });

  useEffect(() => {
    gsap.to(countRef.current, {
      value: 100,
      duration: 5,
      ease: 'linear',
      onUpdate: () => {
        setCount(Math.floor(countRef.current.value));
      },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div className="text-center text-gray-800 text-xs">
      {count}%
    </div>
  );
};

export default LoadingCounter;
