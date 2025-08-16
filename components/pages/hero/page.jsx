'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import VideoComponent from '../../VideoComponent';
import PlusLine from '../../PlusLine';
import BlurText from '../../BlurText';
import LoadingCounter from '../../LoadingCounter';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Hero = () => {
  const linksRef = useRef([]);
  const navbarRef = useRef(null);
  const navbarRef1 = useRef(null);
  const greenBoxRef = useRef(null);
  const blurText = useRef(null);
  const [loadingComplete, setLoadingComplete] = useState(false);

  linksRef.current = [];

  // Declarative mouse event handlers
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { duration: 0.3, filter: 'blur(5px)' });
  };

  const handleMouseLeave = (e) => {
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
        gsap.to(greenBoxRef.current, { duration: 2, opacity: 1, ease: "power1.out" });
      }
      if (blurText.current) {
        gsap.to(blurText.current, { duration: 2, opacity: 1, ease: "power1.out" });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-text-wrapper",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".video", {
      y: 100,
      ease: "power1.inOut",
      rotate: -22,
      scale: 1.5,
      duration: 1,
    });

    tl.to(".navbar", {
      y: -100,
      ease: "power1.inOut",
    });
    return () => {
      tl.scrollTrigger.kill();
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
      // Clean up on unmount
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [loadingComplete]);
const handleScroll = (e) => {
  e.preventDefault();
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: aboutSection, // use the element, not offsetTop
        offsetY: 0,       // optional offset from top
      },
      ease: 'power2.inOut',
    });
  }
};
  return (
    <div className="relative h-screen video-text-wrapper overflow-hidden" id='home'>
      <div className='navbar'>
        <div className="flex text-xs justify-between relative flex-row md:pt-4 md:px-6">
          <div className="space-x-6 hidden md:flex" ref={navbarRef1} style={{ opacity: 0 }}>
            <a href="#home" className="hover:text-gray-400">
              <span
                ref={el => linksRef.current[0] = el}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
              >
                HOME
              </span>
            </a>
            <a href="#about" className="hover:text-gray-400">
              <span
                ref={el => linksRef.current[1] = el}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleScroll}
                className="hover:text-gray-400 cursor-pointer"
              >
                ABOUT
              </span>
            </a>
          </div>

          <h2 className='text-center'>JEGANATHAN</h2>

          <div className="space-x-6 hidden md:flex" ref={navbarRef} style={{ opacity: 0 }}>
            <a href="#services" className="hover:text-gray-400">
              <span
                ref={el => linksRef.current[2] = el}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
                onClick={handleScroll}

              >
                PROJECTS
              </span>
            </a>
            <a href="#contact" className="hover:text-gray-400">
              <span
                ref={el => linksRef.current[3] = el}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer' }}
                onClick={handleScroll}

              >
                CONTACT
              </span>
            </a>
          </div>
        </div>
        <PlusLine />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full z-0 min-h-[600px] ">
        <h2 className='flex md:text-2xl text-slate-600 md:p-8' ref={greenBoxRef} style={{ opacity: 0 }}>
          <BlurText
            texts={['WEB DEVELOPER', 'MERN DEVELOPER', 'REACT ENGINEER']}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8 text-slate-700 whitespace-pre"
          />
        </h2>
        <div className="flex md:mt-[-120px] video">
          <VideoComponent />
        </div>
        <h2 className="text-xl md:text-2xl text-slate-600 mt-4 md:p-8" ref={blurText} style={{ opacity: 0 }}>
          DEVELOPER
        </h2>

        {!loadingComplete && (
          <div className='absolute top-[500px] w-full flex justify-center'>
            <LoadingCounter onComplete={() => setLoadingComplete(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
