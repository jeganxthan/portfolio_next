import MagicBento from '../../MagicBento';
import PlusLine from '../../PlusLine';
import React from 'react';

const Projects: React.FC = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: 'var(--font-arimo)' }}
        className="text-center text-5xl font-arimo font-light py-4"
      >
        PROJECTS
      </h1>
      <PlusLine />
      <MagicBento
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
    </div>
  );
};

export default Projects;
