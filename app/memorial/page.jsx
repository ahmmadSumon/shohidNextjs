import React from 'react';
import Image from 'next/image';
import memorialImg from '../../public/image/syd.png'; // Adjust the path as needed

const MemorialSection = () => {
  return (
    <section className="relative bg-gray-800 text-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={memorialImg}
          alt="Memorial Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 tracking-wide">
          Honoring Our Heroes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-40 mb-6">
              <Image
                src={memorialImg}
                alt="Memorial Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-red-500">
              Memorial Name 1
            </h3>
            <p className="text-gray-300 mb-6">
              A brief description of the memorial and its significance.
            </p>
            <a
              href="#"
              className="inline-block text-red-500 border border-red-500 py-2 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-40 mb-6">
              <Image
                src={memorialImg}
                alt="Memorial Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-red-500">
              Memorial Name 2
            </h3>
            <p className="text-gray-300 mb-6">
              A brief description of the memorial and its significance.
            </p>
            <a
              href="#"
              className="inline-block text-red-500 border border-red-500 py-2 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-40 mb-6">
              <Image
                src={memorialImg}
                alt="Memorial Thumbnail"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-red-500">
              Memorial Name 3
            </h3>
            <p className="text-gray-300 mb-6">
              A brief description of the memorial and its significance.
            </p>
            <a
              href="#"
              className="inline-block text-red-500 border border-red-500 py-2 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              Learn More
            </a>
          </div>
          {/* Add more memorial items as needed */}
        </div>
      </div>
    </section>
  );
};

export default MemorialSection;
