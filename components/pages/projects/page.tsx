import Image from 'next/image';
import PlusLine from '../../PlusLine';
import React from 'react';
import netflix from '../../../public/projects/netflix.png';
import nike from '../../../public/projects/nike.png';
import project from '../../../public/projects/project1.webp';
import food from '../../../public/projects/food.png';

const Projects: React.FC = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: 'var(--font-arimo)' }}
        className="text-center text-2xl md:text-5xl font-arimo font-light py-4"
      >
        PROJECTS
      </h1>
      <PlusLine />
      <div className='flex flex-row gap-2 ml-[100px]'>
        <div className="relative w-[1000px] h-[700px] ml-[-200px]">
          <Image
            src={nike}
            alt="rbac project"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
