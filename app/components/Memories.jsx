import React from 'react';
import Image from 'next/image';
import memorialImg from '../../public/image/syd.png'; // Adjust the path as needed
import Link from 'next/link';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';

const MemorialSection = () => {
  return (
    <section className="relative text-white py-20 bg-gradient-to-b ">
      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Honoring Our Heroes
        </h2>

        <div className='py-10'>
          <TextGenerateEffectDemo/>
        </div>
        <p className="text-gray-400 text-lg md:text-xl">
          Remembering the sacrifices and achievements of our brave heroes through these memorials.
        </p>
      </div>

      {/* Grid of Memorial Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {/* Memorial Item */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-60">
              <Image
                src={memorialImg}
                alt={`Memorial Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-red-400">
                Memorial Name {index + 1}
              </h3>
              <p className="text-gray-400 mb-6">
                Discover the legacy and significance of this memorial that honors our heroes.
              </p>
              <Link href="/honor">
                <button className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-medium tracking-wide hover:bg-red-500 transition-colors duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemorialSection;
