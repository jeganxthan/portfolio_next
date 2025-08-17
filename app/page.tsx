import React from 'react';
import Projects from '../components/pages/projects/page';
import About from '../components/pages/about/page';
import Hero from '../components/pages/hero/page';
import Skills from '../components/pages/skills/page';
import PlusLine from '../components/PlusLine';

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="mt-[-17px]">
        <PlusLine />
      </div>
      <About />
      <PlusLine />
      <Skills />
      <PlusLine />
      <Projects />
    </div>
  );
};

export default Page;
