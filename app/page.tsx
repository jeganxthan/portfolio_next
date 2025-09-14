import React from 'react';

import Hero from '@/component/pages/Hero';
import Projects from '@/component/pages/project/page';
import PlusLine from '@/component/PlusLine';
import Content from '@/component/pages/content/page';
import Skills from '@/component/pages/skills/page';
import Experiences from '@/component/pages/Experiences/page';
import About from '@/component/pages/about/page';
import Mail from '@/component/pages/mail/page';
import Footer from '@/component/pages/footer/page';

const Page = () => {
  return (
    <div className='selection:bg-orange-300'>
      <Hero />
      <PlusLine/>
      <Content/>
      <PlusLine/>
      <Skills/>
      <PlusLine/>
      <Experiences />
      <About />
      <PlusLine/>
      <Projects />
      <PlusLine/>
      <Mail />
      <PlusLine/>
      <Footer/>
    </div>
  );
};

export default Page;
