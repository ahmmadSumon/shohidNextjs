import React from 'react';

import HeroSection from './components/HeroSection';
import StoriesSection from './components/StoriesSection';
import MemorialSection from './components/Memories';
import AboutSection from './components/About';
import VictorySection from './components/Victory';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import DonatePage from './contact/page';
import Video from './components/Video';

const Page = () => {
  return (
    <div className="relative overflow-hidden ">

      <div className="relative z-10">
      <BackgroundBeamsWithCollision/>
      <Video/>
        <AboutSection/>
        <StoriesSection />
        <VictorySection/>
        <MemorialSection/>
        <DonatePage/>
      </div>
     
    </div>
  );
};

export default Page;
