'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface BlurTextProps {
  texts: string[];
  animateBy?: 'words' | 'letters'; // currently only 'words' supported in your code, but added letters for future
  direction?: Direction;
  className?: string;
  duration?: number;           // seconds text stays visible
  transitionDuration?: number; // seconds animation duration
}

const getDirectionOffset = (direction: Direction) => {
  switch (direction) {
    case 'top':
      return { y: -20 };
    case 'bottom':
      return { y: 20 };
    case 'left':
      return { x: -20 };
    case 'right':
      return { x: 20 };
    default:
      return { y: 0 };
  }
};

const BlurText: React.FC<BlurTextProps> = ({
  texts = [],
  animateBy = 'words',
  direction = 'top',
  className = '',
  duration = 2,
  transitionDuration = 1,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const animateIn = () => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll<HTMLElement>('.blur-item');
    gsap.fromTo(
      items,
      {
        opacity: 0,
        filter: 'blur(10px)',
        ...getDirectionOffset(direction),
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
        duration: transitionDuration,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  };

  const animateOut = (onComplete: () => void) => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll<HTMLElement>('.blur-item');
    gsap.to(items, {
      opacity: 0,
      filter: 'blur(10px)',
      duration: transitionDuration,
      ease: 'power3.in',
      stagger: 0.05,
      onComplete,
    });
  };

  useEffect(() => {
    if (texts.length === 0) return; 
    animateIn();

    const timer = setTimeout(() => {
      animateOut(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      });
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, duration, transitionDuration, texts]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {texts[currentIndex]?.split(' ').map((word, idx) => (
        <span key={idx} className="blur-item inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
};

export default BlurText;
