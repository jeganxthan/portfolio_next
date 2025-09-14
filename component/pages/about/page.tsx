"use client"
import React, { useEffect, useRef } from 'react';
import PlusLine from '@/component/PlusLine';
import flower from '@/public/flower.webp';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Flower animation from left
    gsap.from(imageRef.current, {
      x: -300, // start from left
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%', // trigger when top of image hits 80% of viewport
      },
    });

    // Text animation (fade + slight upward movement)
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div>
      <div className="md:ml-[700px] ml-[200px]">
        <PlusLine />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-[300px] h-[300px] md:w-[900px] md:h-[900px]" ref={imageRef}>
          <Image
            src={flower}
            fill
            className="object-fill rotate-90"
            placeholder="blur"
            alt="Flower"
          />
        </div>
        <div
          className="flex flex-col p-2 md:p-0 items-center justify-center md:ml-30 md:items-start text-center md:text-left max-w-2xl"
          ref={textRef}
        >
          <h1
            className="text-[20px] md:text-[78px] tracking-tighter text-[#181818] md:w-[1200px] leading-tight font-arimo"
            style={{ fontFamily: 'var(--font-arimo)' }}
          >
            Jeganathan
          </h1>
          <p className="text-sm text-[#333333] leading-relaxed uppercase">
            I’m a Full Stack Developer with strong expertise in the MERN stack. I’m passionate about building scalable web applications and delivering efficient solutions. Alongside full-stack development, I’m sharpening my Data Structures and Algorithms (DSA) in Java, while also exploring and learning other backend technologies to expand my knowledge. I constantly work on improving my skills and staying up to date with modern development practices to become a well-rounded software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
