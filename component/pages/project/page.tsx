"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pro1 from "@/public/projects/pro1.webp";
import pro2 from "@/public/projects/pro2.webp";
import pro3 from "@/public/projects/pro3.webp";
import pro4 from "@/public/projects/pro4.webp";
import rbac from "@/public/projects/rbac.png";
import express from "@/public/express.svg";
import node from "@/public/node.svg";
import react from "@/public/react.svg";
import socket from "@/public/socket.svg";
import tailwind from "@/public/tailwind.svg";
import mongo from "@/public/MongoDB.svg";

const projects = [ { img: pro1, title: "RBAC Ecommerce", modalImg: rbac, desc: "MERN e-commerce website, role-based access control ensures that each type of user has specific permissions. Admins have full authority to manage the platform, including handling users, products, and orders. Sellers are restricted to managing only their own products and viewing orders related to them, giving them control over their shop but not the entire system. Users (customers) have the ability to browse products, add them to the cart, place orders, and manage their personal accounts. This separation of roles maintains security, prevents unauthorized actions, and ensures smooth operation of the platform.", techStack:[express, node, react, mongo] }, { img: pro2, title: "Git-sh", modalImg: rbac, desc: "MERN stack web application that combines multiple advanced features into one platform. The system includes secure authentication with OTP verification, ensuring that only verified users can access the app. It also supports a followers/following system, allowing users to connect with each other like a social network. For real-time communication, you integrated Socket.IO-based chat, enabling instant messaging between users. Additionally, you implemented WebRTC for video/audio calls, giving users the ability to connect beyond text chat. Altogether, this project demonstrates your skills in building secure, scalable, and interactive real-time web applications.", techStack:[express, node, react, socket, mongo] }, { img: pro3, title: "Netflix", modalImg: rbac, desc: "Netflix clone using React and Tailwind CSS, featuring a fully responsive design that adapts seamlessly to desktops, tablets, and mobile devices. The project replicates Netflix’s modern UI with dynamic layouts, smooth styling, and a user-friendly interface, showcasing your skills in frontend development and responsive web design.", techStack:[react, tailwind] }, { img: pro4, title: "Food app", modalImg: rbac, desc: "Food Ordering App using dummy JSON data, where users can browse menus, add items to the cart, and place orders. The project simulates a real-world food delivery platform, demonstrating your ability to work with APIs, manage state, and build interactive user interfaces.", techStack:[react, tailwind] }, ];

const Page = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-10" id="projects">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 uppercase font-arimo"
        style={{ fontFamily: "var(--font-arimo)" }}
      >
        My Projects
      </h1>

      {/* Cards */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            onClick={() => setSelected(i)}
            className="bg-white p-4 flex flex-col items-center relative opacity-0 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-md"
          >
            {/* card image */}
            <div className="relative w-full h-[400px] aspect-[4/5] mb-4  overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>

            {/* text */}
            <div className="w-full text-left">
              <h2 className="text-lg sm:text-base md:text-lg lg:text-xl font-semibold uppercase">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600 line-clamp-6 sm:line-clamp-8">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
     {/* Modal */}
{selected !== null && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
    <div className="relative bg-white shadow-xl w-full max-w-3xl max-h-full overflow-y-auto p-4 sm:p-6 md:p-8">
      
      {/* Close */}
      <button
        className="absolute top-4 right-4 z-50 text-black md:text-xl font-bold"
        onClick={() => setSelected(null)}
      >
        ✕
      </button>

      {/* modal image */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-4 overflow-hidden z-10">
        <Image
          src={projects[selected].modalImg}
          alt={projects[selected].title}
          fill
          className="object-cover"
        />
      </div>

      {/* modal content */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 uppercase">
        {projects[selected].title}
      </h2>
      <p className="text-gray-700 uppercase mb-4 text-xs md:text-sm">
        {projects[selected].desc}
      </p>

      {/* Tech Stack */}
      {projects[selected].techStack && (
        <div className="flex gap-2 sm:gap-4 mt-4 flex-wrap">
          {projects[selected].techStack.map((tech, idx) => (
            <div
              key={idx}
              className="w-8 h-8 sm:w-10 sm:h-10 relative"
              title="Tech Stack"
            >
              <Image
                src={tech}
                alt="tech"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default Page;
