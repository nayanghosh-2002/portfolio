import React, { memo } from 'react';
import ParticlesComponent from '../particles/Particles';
import MouseEffects from '../mouseeffects/MouseEffects';
import Banner from './Banner/Banner';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Education from './Education/education';

const AppLayout = () => {
  return (
    <>
        <Banner />

      <div className='container'>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <MemoizedParticles />
      <MemoizedMouseEffects />
    </>
  );
};


const MemoizedParticles = memo(ParticlesComponent);
const MemoizedMouseEffects = memo(MouseEffects);

export default AppLayout;
