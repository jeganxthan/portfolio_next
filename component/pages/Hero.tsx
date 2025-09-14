'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import VideoComponent from '../VideoComponent';
import PlusLine from '../PlusLine';
import BlurText from '../BlurText';
import LoadingCounter from '../LoadingCounter';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero: React.FC = () => {
  const linksRef = useRef<(HTMLSpanElement | null)[]>([]);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const navbarRef1 = useRef<HTMLDivElement | null>(null);
  const greenBoxRef = useRef<HTMLHeadingElement | null>(null);
  const blurText = useRef<HTMLHeadingElement | null>(null);
  const [loadingComplete, setLoadingComplete] = useState(false);

  linksRef.current = [];

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { duration: 0.3, filter: 'blur(5px)' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, { duration: 0.3, filter: 'blur(0px)' });
  };

  useEffect(() => {
    if (loadingComplete && navbarRef.current && navbarRef1.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        navbarRef1.current,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [loadingComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (greenBoxRef.current) {
        gsap.to(greenBoxRef.current, { duration: 2, opacity: 1, ease: 'power1.out' });
      }
      if (blurText.current) {
        gsap.to(blurText.current, { duration: 2, opacity: 1, ease: 'power1.out' });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.video-text-wrapper',
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        pin: true,
      },
    });

    tl.to('.video', {
      y: 100,
      ease: 'power1.inOut',
      rotate: -22,
      scale: 1.5,
      duration: 1,
    });

    tl.to('.navbar', {
      y: -100,
      ease: 'power1.inOut',
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!loadingComplete) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Also disable scroll on <html>
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [loadingComplete]);

// Update function to accept a sectionId
const handleScroll = (e: React.MouseEvent<HTMLSpanElement>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: section,
        offsetY: 0,
      },
      ease: 'power2.inOut',
    });
  }
};


  return (
    <div className="relative h-full video-text-wrapper overflow-hidden" id="home">
      <div className="navbar">
        <div className="flex text-xs justify-between relative flex-row md:pt-4 md:px-6 text-slate-700 ">
          <div className="space-x-8 hidden md:flex p-4" ref={navbarRef1} style={{ opacity: 0 }}>
            <a href="#home" className="hover:text-gray-400 text-sm font-semibold">
              <span
                ref={el => {
                  linksRef.current[0] = el;
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
              >
                HOME
              </span>
            </a>
            <a href="#about" className="hover:text-gray-400 text-sm font-semibold">
              <span
                ref={el => {
                  linksRef.current[1] = el;
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => handleScroll(e, 'about')} 
                className="hover:text-gray-400 cursor-pointer"
              >
                ABOUT
              </span>
            </a>
          </div>

          <h2 className="text-center md:text-left w-full text-xl md:w-auto md:mt-0 mt-6 tracking-widest font-medium md:p-4">JEGANATHAN</h2>

          <div className="space-x-8 hidden md:flex p-4" ref={navbarRef} style={{ opacity: 0 }}>
            <a href="#projects" className="hover:text-gray-400 text-sm font-semibold">
              <span
                ref={el => {
                  linksRef.current[2] = el;
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
               onClick={(e) => handleScroll(e, 'projects')} 
              >
                PROJECTS
              </span>
            </a>
            <a href="#contact" className="hover:text-gray-400 text-sm font-semibold">
              <span
                ref={el => {
                  linksRef.current[3] = el;
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
                onClick={(e) => handleScroll(e, 'contact')} 
              >
                CONTACT
              </span>
            </a>
          </div>

        </div>
        <PlusLine />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full z-0 min-h-[600px]">
        <h2
          className="flex md:text-2xl text-slate-600 md:p-8"
          ref={greenBoxRef}
          style={{ opacity: 0, position: 'relative', zIndex: 10 }}
        >
          <BlurText
            texts={['WEB DEVELOPER', 'MERN DEVELOPER', 'REACT ENGINEER']}
            animateBy="words"
            direction="top"
            className="text-4xl mb-8 text-slate-700 whitespace-pre"
          />
        </h2>
        <div className="flex mt-[200px] md:mt-[-180px] video" style={{ position: 'relative', zIndex: 1 }}>
          <VideoComponent />
        </div>
        <h2 className="text-xl md:text-4xl text-slate-600 mt-4 md:p-8" ref={blurText} style={{ opacity: 0 }}>
          SOFTWARE DEVELOPER
        </h2>

        {!loadingComplete && (
          <div className="absolute top-[500px] w-full flex justify-center mt-[180px]">
            <LoadingCounter onComplete={() => setLoadingComplete(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
