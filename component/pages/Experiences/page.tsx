import React from 'react';
import ignite from "@/public/ignite.png";
import mern from "@/public/node.svg"; // Add your MERN logo here
import Image from 'next/image';

const Page = () => {
  return (
    <div className="px-6 py-12">
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase text-gray-800"
        style={{ fontFamily: "var(--font-arimo)" }}
      >
        Experiences
      </h1>

      <div className="flex flex-col md:flex-row md:justify-center items-center gap-10">
        {/* Ignite Skylabs Card */}
        <div className="flex flex-col md:flex-row items-center shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300 w-full max-w-md">
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <Image
              src={ignite}
              alt="Ignite Skylabs"
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              placeholder="blur"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900">Ignite Skylabs</h2>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Worked on exciting projects, contributing to web development and innovative solutions.
            </p>
             <a
              href="https://ridemap.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Visit Company Website
            </a>
          </div>
        </div>

        {/* MERN Stack Internship Card */}
        <div className="flex flex-col md:flex-row items-center shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300 w-full max-w-md">
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <Image
              src={mern}
              alt="MERN Stack Internship"
              fill
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==" // tiny transparent SVG
            />

          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900">MERN Stack Internship</h2>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Role: Full Stack MERN Developer <br />
              Location: Pondicherry, India <br />
              Type: Onsite Internship
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
