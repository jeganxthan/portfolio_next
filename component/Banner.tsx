"use client"
import Image from "next/image";
import React from "react";

interface Image {
  id: string | number;
  image: string;
}

interface BannerProps {
  images: Image[];
  speed?: number;
}

const Banner: React.FC<BannerProps> = ({ images, speed = 8000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        {[...Array(3)].map((_, idx) => (
          <section
            key={idx}
            style={{ ["--speed" as any]: `${speed}ms` }}
          >
            {images.map(({ id, image }) => (
              <div className="w-full h-auto md:w-auto md:h-auto max-w-full" key={id}>
                <img src={image} alt={id.toString()} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export { Banner };
