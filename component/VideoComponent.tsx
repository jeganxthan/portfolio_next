'use client'
import React, { useRef } from 'react';

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.src = '/flowerstay.webm';
      videoRef.current.play();
    }
  };

  return (
    <div className="flex justify-center md:w-full md:ml-0 md:h-full items-center w-[600px] h-[600px] ml-[40px] md:mt-0 mt-[-200px]">
      <video
        ref={videoRef}
        width="100%"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        playsInline
        loop={false} 
      >
        <source src="/flower.webm" type="video/webm" />
        <source src="/flowerstay.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
