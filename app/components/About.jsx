"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Sample images (replace with your actual images)
import img1 from "../../public/image/img1.jpg";
import img2 from "../../public/image/img10.jpg";
import img3 from "../../public/image/img3.jpg";
import img4 from "../../public/image/img4.webp";
import img5 from "../../public/image/img5.webp";
import img6 from "../../public/image/img6.jpg";
import img7 from "../../public/image/img7.jpg";
import img8 from "../../public/image/img8.webp";
import img9 from "../../public/image/img9.jpg";
import img10 from "../../public/image/img11.jpg";

const AboutSection = () => {
  const [showFullStory, setShowFullStory] = useState(false);
  const toggleFullStory = () => setShowFullStory(!showFullStory);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imagesToShow = showFullStory
    ? [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
    : [img1, img2, img3, img4];

  return (
    <motion.section
      ref={ref}
      className="bg-black text-white py-24 px-8 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-500 text-center md:text-left tracking-wide">
            About the Bangladesh Quota Reform Movement
          </h2>
          <div className="text-lg leading-relaxed mb-8">
            <p className={`${showFullStory ? "" : "line-clamp-6"} mb-8`}>
              The 2024 Bangladesh quota reform movement was an anti-government
              and pro-democracy protest in Bangladesh, spearheaded primarily by
              university students...
            </p>
            {showFullStory && (
              <>
                <p className="mb-8">
                  (The 2024 Bangladesh quota reform movement was a series of anti-government and pro-democracy protests in Bangladesh, spearheaded primarily by university students. Initially focused on restructuring quota-based systems for government job recruitment, the movement expanded against what many perceive as an authoritarian government when they carried out the July massacre of protestors and civilians, most of whom were students.[f] Started as a student movement, the movement later escalated into a fully-fledged mass uprising known as the Student–People's uprising. <br />

The protest began in June 2024, in response to the Supreme Court of Bangladesh reinstating a 30% quota for descendants of freedom fighters, reversing the government decision made in response to the 2018 Bangladesh quota reform movement. Students began to feel like they have a limited opportunity based on merit. The protest quickly spread throughout the entire country because of the government's violent response, as well as growing public dissatisfaction against an oppressive government. The situation was further complicated by many other ongoing issues, like the government's inability to manage a prolonged economic downturn, reports of rampant corruption and human rights violations, and the absence of democratic channels for initiating changes. <br />

The government sought to suppress the protests by shutting down all educational institutions. They deployed their student wing, the Chhatra League, along with other factions of the Awami League party. These groups resorted to using firearms and sharp weapons against the demonstrators. The government then deployed Police, RAB, BGB and other armed forces, declaring a nationwide shoot-at-sight curfew amid an unprecedented government-ordered nationwide internet and mobile connectivity blackout that effectively isolated Bangladesh from the rest of the world. Later, the government also blocked social media in Bangladesh. As of August 2, there were 215 confirmed deaths, more than 20,000 injuries, and more than 11,000 arrests.The unofficial death toll is between 300 and 500. UNICEF reported that at least 32 children were killed during July's protests, with many more injured and detained. Determining the exact number of deaths has been difficult because the government reportedly restricted hospitals from sharing information with the media without police permission, hospital CCTV footage was confiscated, and numerous individuals with gunshot wounds were buried without identification. <br />

The Awami League government and Prime Minister Sheikh Hasina have suggested that political opponents have co-opted the protest. Despite the curfew restrictions the movement remained ongoing as it expanded its demands to include accountability for violence, a ban on the student wing of the government Chhatra League, and resignation of certain government officials,including the resignation of Prime Minister Hasina. The government's use of widespread violence against the general public turned the student protest into a people's uprising known as the non-cooperation movement. <br />
source: wikipedia
)
                </p>
              </>
            )}
          </div>
          <button
            onClick={toggleFullStory}
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          >
            {showFullStory ? "Show Less" : "Read More"}
          </button>
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.div
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {imagesToShow.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={img}
                alt={`Protest Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0 grayscale"
                width={500}
                height={300}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
