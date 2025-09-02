"use client"
import React, { useState } from "react";
import { Banner } from "../../Banner";
import "./styles.css";
import PlusLine from "../../PlusLine";
import { CornerUpLeft } from 'lucide-react';

interface ImageType {
    id: string;
    image: string;
}

const images: ImageType[] = [
    "./vite.png",
    "./tailwind.svg",
    "./next.svg",
    "./node.svg",
    "./express.svg",
    "./MongoDB.svg",
    "./python.svg",
    "./java.svg",
    "./react.svg",
    "./firebase.svg",
    "./html.svg",
    "./css.svg",
    "./js.svg",
    "./ts.svg",
    "./gsap.png",
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));

const Skills: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-6">
            <h1 className="text-[#302e2e] font-medium text-xs p-6">SKILLS</h1>
            <div className="App grayscale py-8">
                <Banner images={images} speed={32000} />
            </div>

            {/* Button */}
            <div className="flex justify-end px-10">
                <button
                    className="hover:cursor-pointer bg-white text-xs p-2 flex items-center gap-2 text-slate-700 font-medium"
                    onClick={() => setOpen(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
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
                className={`fixed inset-0 z-50 flex transition-colors duration-100 ${open ? "bg-opacity-50" : "pointer-events-none"
                    }`}
                onClick={() => setOpen(false)}
            >
                <div
                    className={`ml-auto h-full bg-[radial-gradient(circle,rgba(224,193,193,0.91)_0%,rgba(225,230,237,1)_100%)] shadow-lg w-[700px] p-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-end items-center">
                        <button
                            className="hover:cursor-pointer bg-white text-xs p-2 flex items-center gap-2 text-slate-700 font-medium"
                            onClick={() => setOpen(false)}
                        >
                            <CornerUpLeft width={17}/>
                            CLOSE
                        </button>
                    </div>
                    <PlusLine />
                    <div className="flex justify-center">
                        <p className="font-arimo text-3xl">
                            ALL SKILLS
                        </p>
                    </div>
                    <PlusLine />

                </div>
            </div>
        </div>
    );
};

export default Skills;
