import React from 'react';

import HeroSection from './components/HeroSection';
import StoriesSection from './components/StoriesSection';
import MemorialSection from './components/Memories';
import AboutSection from './components/About';
import VictorySection from './components/Victory';

const Page = () => {
  return (
    <div className="relative overflow-hidden">

      <div className="relative z-10">
        <HeroSection />
        <AboutSection/>
        <StoriesSection />
        <VictorySection/>
        <MemorialSection/>
      </div>
    </div>
  );
};

export default Page;
