import React from 'react';

import Hero from '@/component/pages/Hero';
import Projects from '@/component/pages/project/page';
import PlusLine from '@/component/PlusLine';
import About from '@/component/pages/about/page';
import Skills from '@/component/pages/skills/page';

const Page = () => {
  return (
    <div className='selection:bg-orange-300'>
      <Hero />
      <PlusLine/>
      <About/>
      <PlusLine/>
      <Skills/>
      <Projects />

    </div>
  );
};

export default Page;
