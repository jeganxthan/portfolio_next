"use client";
import React, { useState } from "react";
import PlusLine from "../../PlusLine";
import { CornerUpLeft } from "lucide-react";

interface ImageType {
  id: string;
  image: string;
}

const imageFilenames = [
  "vite.png",
  "tailwind.svg",
  "next.svg",
  "node.svg",
  "express.svg",
  "MongoDB.svg",
  "python.svg",
  "java.svg",
  "react.svg",
  "firebase.svg",
  "html.svg",
  "css.svg",
  "js.svg",
  "ts.svg",
  "gsap.png",
];

const images: ImageType[] = imageFilenames.map((filename) => ({
  id: filename,
  image: `/${filename}`,
}));

const Banner: React.FC<{ images: ImageType[]; speed: number }> = ({
  images,
  speed,
}) => {
  return (
    <div className="relative w-full overflow-hidden h-20 md:h-30 mx-auto"> {/* smaller height */}
      <section
        className="flex gap-18"
        style={{
          animation: `swipe ${speed}ms linear infinite`,
        }}
      >
        {[...images, ...images].map(({ id, image }, idx) => (
          <img
            key={`${id}-${idx}`}
            src={image}
            alt={id}
            className={`md:h-30 h-20 object-cover ${
              idx !== images.length * 2 - 1 ? "mr-4" : "pl-[140px]"
            }`}
            draggable={false}
          />
        ))}
      </section>

      <style>{`
        @keyframes swipe {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};


const Skills: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-6 font-sans text-[#302e2e]"> 
      <h1 className="font-medium text-xs p-6 text-left">SKILLS</h1> 

      <div className="grayscale py-8">
        <Banner images={images} speed={12000} />
      </div>

      {/* Button */}
      <div className="flex justify-end px-10">
        <button
          className="hover:cursor-pointer bg-white text-xs p-2 flex items-center gap-2 text-slate-700 font-medium"
          onClick={() => setOpen(true)}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
            />
          </svg>
          SHOW MORE
        </button>
      </div>

      {/* Sidebar Modal */}
      <div
        className={`fixed inset-0 z-50 flex transition-colors duration-100 ${
          open ? "bg-opacity-50" : "pointer-events-none bg-transparent"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`ml-auto h-full bg-[radial-gradient(circle,rgba(224,193,193,0.91)_0%,rgba(225,230,237,1)_100%)] shadow-lg w-[700px] p-6 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-end items-center">
            <button
              className="hover:cursor-pointer bg-white text-xs p-2 flex items-center gap-2 text-slate-700 font-medium"
              onClick={() => setOpen(false)}
              type="button"
            >
              <CornerUpLeft width={17} />
              CLOSE
            </button>
          </div>
          <PlusLine />
          <div className="flex justify-center">
            <p className="font-arimo text-3xl">ALL SKILLS</p>
          </div>
          <PlusLine />
        </div>
      </div>
    </div>
  );
};


export default Skills;
