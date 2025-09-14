'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Lines of text split manually
const headingLines = [
  "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0I'm a MERN stack developer",
  "specializing in building full-stack web",
  "  applications."
];

const paragraphLines = [
  "Aspiring Web Developer with a strong",
  "foundation in React.js, currently",
  "expanding backend expertise in Node.",
  "js and Express.js. Familiar with core",
  "Java concepts and actively learning",
  "Data Structures and to enhance",
  "problem-solving abilities."
];

const About = () => {
  // Use arrays of refs initialized with null values
  const headingRefs = useRef<(HTMLDivElement | null)[]>([]);
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Helper to set refs in an array correctly
  const setHeadingRef = (el: HTMLDivElement | null, index: number) => {
    headingRefs.current[index] = el;
  };

  const setParagraphRef = (el: HTMLDivElement | null, index: number) => {
    paragraphRefs.current[index] = el;
  };

  useEffect(() => {
    if (headingRefs.current.length > 0) {
      gsap.fromTo(
        headingRefs.current,
        {
          opacity: 0,
          y: 40,
          filter: 'blur(6px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRefs.current[0],
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (paragraphRefs.current.length > 0) {
      gsap.fromTo(
        paragraphRefs.current,
        {
          opacity: 0,
          y: 40,
          filter: 'blur(6px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraphRefs.current[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="mt-20 flex flex-col justify-center items-center mb-20 px-4" >
      {/* Heading */}
      <div
        className="text-[20px] md:text-[78px] tracking-tighter text-[#181818] md:w-[1200px] leading-tight font-arimo"
        style={{ fontFamily: 'var(--font-arimo)' }}
      >
        {headingLines.map((line, index) => (
          <div
            key={index}
            ref={(el) => setHeadingRef(el, index)}
            className="overflow-hidden"
          >
            <span className="inline-block">{line}</span>
          </div>
        ))}
      </div>

      <div className="uppercase text-[12px] md:text-[13px] mt-20 md:w-[400px] md:ml-[550px] text-[#302e2e] font-medium">
        {paragraphLines.map((line, index) => (
          <div
            key={index}
            ref={(el) => setParagraphRef(el, index)}
            className="overflow-hidden"
          >
            <span className="inline-block">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
