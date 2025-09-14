"use client"
import React from "react";
import Magnet from "../../Magnet";
import Image from "next/image";
import flower from "@/public/footer.webp";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ArrowUp } from "lucide-react";
import next from '@/public/next.svg'
import tailwind from '@/public/tailwind.svg'
gsap.registerPlugin(ScrollToPlugin);
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
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
    <footer className="relative w-full mt-24">
      {/* Main Footer Section */}
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden">
        {/* Top: Tagline + Scroll Button */}
        <div className="flex justify-between items-center px-6 py-4 z-20 relative">
          <p className="uppercase text-xs md:text-xs w-[100px]">Let’s make something special.</p>

          <div className="flex flex-col items-center gap-2">
            <p className="uppercase text-xs tracking-wider">Scroll</p>
            <button
              className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:scale-110 transition-transform"
              aria-label="Scroll to top"
              onClick={(e) => handleScroll(e, 'home')} 
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <p className="uppercase text-xs tracking-wider">To Up</p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[900px] md:w-[1700px] h-[900px] md:h-[1200px] z-0">
          <Image src={flower} fill className="object-cover" alt="Flower" />
        </div>

        {/* Magnet Email */}
        <div className="relative z-10 flex justify-center items-center w-full h-full">
          <Magnet padding={50} disabled={false} magnetStrength={3}>
            <div className="relative flex justify-center items-center mb-28">
              <p
                className="text-black text-2xl md:text-5xl text-center px-6 py-3 rounded-lg bg-white/30 backdrop-blur-md"
                style={{ fontFamily: "var(--font-arimo)" }}
              >
                jegan4044@gmail.com
              </p>

              {/* Corner Plus Signs */}
              <span className="absolute top-[-20px] left-0 -translate-x-2 -translate-y-2 text-black text-xl">+</span>
              <span className="absolute top-[-20px] right-0 translate-x-2 -translate-y-2 text-black text-xl">+</span>
              <span className="absolute bottom-[-20px] left-0 -translate-x-2 translate-y-2 text-black text-xl">+</span>
              <span className="absolute bottom-[-20px] right-0 translate-x-2 translate-y-2 text-black text-xl">+</span>
            </div>
          </Magnet>
        </div>
      </div>
<div className="w-full flex flex-row justify-between items-center p-6 absolute bottom-2 mt-10 space-y-2 text-center text-sm text-gray-600">
  <p>&copy; {currentYear} Jeganathan I. All rights reserved.</p>
  <div className="flex flex-row gap-2">
  <p>Made with </p>
  <Image src={tailwind} width={20} height={20} alt="tailwind"/>
  <Image src={next} width={20} height={20} alt="tailwind"/>
  </div>
</div>

    </footer>
  );
};

export default Footer;
