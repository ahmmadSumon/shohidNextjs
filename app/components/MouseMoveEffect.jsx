"use client"
import React, { useEffect, useRef } from 'react';

const MouseMoveBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      backgroundRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #ff0000, #000000)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={backgroundRef} className="absolute inset-0 z-0"></div>;
};

export default MouseMoveBackground;
