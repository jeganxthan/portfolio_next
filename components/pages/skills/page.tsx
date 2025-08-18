import React from "react";
import { Banner } from "../../Banner";
import "./styles.css";

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
    "./js.svg",
    "./ts.svg",
    "./java.svg",
    "./react.svg",
    "./gsap.png",
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));

const Skills: React.FC = () => {
    return (
        <div className="py-6">
            <h1 className="text-[#302e2e] font-medium text-xs p-6">SKILLS</h1>
            <div className="App grayscale py-8">
                <Banner images={images} speed={30000} />
            </div>
        </div>
    );
};

export default Skills;
