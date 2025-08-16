import About from '../components/pages/about/page'
import Hero from '../components/pages/hero/page'
import Skills from '../components/pages/skills/page'
import PlusLine from '../components/PlusLine'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <div className='mt-[-17px]'>
        <PlusLine/>
      </div>
      <About/>
        <PlusLine/>
      <Skills/>
        <PlusLine/>
    </div>
  )
}

export default page