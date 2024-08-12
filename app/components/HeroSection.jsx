"use client"
import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import gsap from 'gsap';
import img from "../../public/image/syd.png"; // Adjust this path as necessary

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && buttonRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });
  
      tl.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" }
      )
      .fromTo(
        subtitleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        "<0.2"
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        "<0.2"
      );
    }
  }, []);
  
  return (
    <section className="relative  text-white h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
       n
          <Image
            src={img}
            alt="Background Image"
            layout="fill"
            objectFit="contain" // Ensures the image covers the container
            quality={100}
            className="opacity-30 z-20"
          />
        
      </div>
      {/* <div className="absolute inset-0 opacity-70"></div> */}
      <div className="relative  text-center px-4">
        <h1 ref={titleRef} className="text-6xl md:text-7xl font-extrabold mb-4">
          Honoring the Brave
        </h1>
        <p ref={subtitleRef} className="text-2xl mb-8">
          A tribute to those who sacrificed everything for our freedom.
        </p>
        
      </div>
      <a
       ref={buttonRef}
          href="#stories"
          className="z-30 inline-block bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-red-500 transition duration-300"
        >
          Explore Their Stories
        </a>
    </section>
  );
};

export default HeroSection;
