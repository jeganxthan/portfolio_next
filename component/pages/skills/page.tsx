"use client";
import React, { useState } from "react";
import PlusLine from "../../PlusLine";
import { CornerUpLeft } from "lucide-react";
import Image from "next/image";
import java from '@/public/java.svg'
import vite from '@/public/vite.png'
import tailwind from '@/public/tailwind.svg'
import next from '@/public/next.svg'
import node from '@/public/node.svg'
import express from '@/public/express.svg'
import mongo from '@/public/MongoDB.svg'
import python from '@/public/python.svg'
import react from '@/public/react.svg'
import firebase from '@/public/firebase.svg'
import socket from '@/public/socket.svg'
import html from '@/public/html.svg'
import css from '@/public/css.svg'
import js from '@/public/js.svg'
import ts from '@/public/ts.svg'
import gsap from '@/public/gsap.png'
import flask from '@/public/flask.svg'
import linux from '@/public/linux.png'
import postman from '@/public/postman.svg'
import git from '@/public/git.svg'
import docker from '@/public/docker.svg'
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
  "socket.svg",
  "html.svg",
  "css.svg",
  "js.svg",
  "ts.svg",
  "gsap.png",
  "flask.svg",
  "linux.png",
  "git.svg",
  "docker.svg",
  "postman.svg"
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
    <div className="relative w-full overflow-hidden h-20 md:h-30 mx-auto">
      <div
        className="flex whitespace-nowrap gap-10"
        style={{
          animation: `scroll ${speed}ms linear infinite`,
        }}
      >
        {/* Duplicate images to make the scroll seamless */}
        {[...images, ...images].map(({ id, image }, idx) => (
          <img
            key={`${id}-${idx}`}
            src={image}
            alt={id}
            className="inline-block h-20 md:h-30 object-contain mr-4"
            draggable={false}
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
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
        className={`fixed inset-0 z-50 flex transition-colors duration-100 ${open ? "bg-opacity-50" : "pointer-events-none bg-transparent"
          }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`ml-auto h-full bg-[radial-gradient(circle,rgba(224,193,193,0.91)_0%,rgba(225,230,237,1)_100%)] shadow-lg w-[700px] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-end items-center p-6">
            <button
              className="hover:cursor-pointer bg-white text-xs p-2 flex items-center gap-2 text-slate-700 font-medium"
              onClick={() => setOpen(false)}
              type="button"
            >
              <CornerUpLeft width={17} />
              CLOSE
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="px-6 pb-6 overflow-y-auto max-h-[calc(100vh-72px)]">
            <PlusLine />
            <div className="flex justify-center">
              <p className="font-arimo text-3xl">ALL SKILLS</p>
            </div>
            <PlusLine />

            {/* Skills sections */}
            <div className="uppercase mt-10 flex flex-col gap-8">
              {/* Programming */}
              <div>
                <p className="mb-4">Programming</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  <Image src={java} width={70} height={70} alt="java" />
                  <Image src={python} width={70} height={70} alt="python" />
                  <Image src={js} width={70} height={70} alt="js" />
                  <Image src={ts} width={70} height={70} alt="ts" />
                </div>
              </div>

              {/* Frontend */}
              <div>
                <p className="mb-4">Frontend</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  <Image src={next} width={70} height={70} alt="next" />
                  <Image src={vite} width={70} height={70} alt="vite" />
                  <Image src={react} width={70} height={70} alt="react" />
                  <Image src={tailwind} width={70} height={70} alt="tailwind" />
                  <Image src={html} width={70} height={70} alt="html" />
                  <Image src={css} width={70} height={70} alt="css" />
                  <Image src={gsap} width={70} height={70} alt="gsap" />
                </div>
              </div>

              {/* Backend */}
              <div>
                <p className="mb-4">Backend</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  <Image src={node} width={70} height={70} alt="node" />
                  <Image src={express} width={70} height={70} alt="express" />
                  <Image src={firebase} width={70} height={70} alt="firebase" />
                  <Image src={flask} width={70} height={70} alt="flask" />
                  <Image src={socket} width={70} height={70} alt="socket" />
                </div>
              </div>

              {/* Database */}
              <div>
                <p className="mb-4">Database</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  <Image src={mongo} width={70} height={70} alt="mongo" />
                </div>
              </div>

              {/* Tools */}
              <div>
                <p className="mb-4">Tools</p>
                <div className="flex flex-row gap-4 flex-wrap">
                  <Image src={linux} width={70} height={70} alt="linux" />
                  <Image src={postman} width={70} height={70} alt="postman" />
                  <Image src={git} width={70} height={70} alt="git" />
                  <Image src={docker} width={70} height={70} alt="docker" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


export default Skills;
