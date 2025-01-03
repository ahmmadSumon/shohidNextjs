"use client"
import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import gsap from 'gsap';
import img from "../../public/image/syd.png"; // Adjust this path as necessary
import Link from "next/link";
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
    <section className="relative  text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
      <div className="flex flex-col md:flex-row gap-5">
      <Link href="/stories">
  <button className="relative z-50 rounded-full px-6 py-3 bg-red-600 text-white text-xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
     Read Their Stories
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Read Their Stories
    </span>
  </button>
</Link>
<Link href="/donation">
  <button className="relative z-50 rounded-full px-6 py-3 bg-red-600 text-white text-xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
     Give Donation 
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    Give Donation 
    </span>
  </button>
</Link>
      </div>
     
    </section>
  );
};

export default HeroSection;
