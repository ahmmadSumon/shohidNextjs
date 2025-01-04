"use client"
import { motion } from "framer-motion";
import { LayoutGridDemo } from "./LayoutGridDemo";
import Link from "next/link";
import React from "react";

const VictorySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold mb-6 text-white"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Their Victory, Our Legacy
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="text-lg leading-relaxed mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The martyrs who laid down their lives did so with courage and a deep
          commitment to justice. Their sacrifice is not in vain—it is a victory
          that echoes through time, inspiring generations to stand up for
          freedom and human dignity. The ultimate triumph of their spirit lives
          on in our hearts and actions.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-6"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Though they are no longer with us, their victory remains. It is seen
          in the ongoing struggle for truth, in the courage of those who
          continue to fight against oppression, and in the unity of people who
          stand together for a just cause. We honor their memory by carrying
          forward their legacy, ensuring that their sacrifices are never
          forgotten.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Let us remember, reflect, and reaffirm our commitment to the ideals
          for which they fought. Their victory is a beacon of hope, a reminder
          that even in the darkest times, the light of justice will prevail.
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-10"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/stories">
            <button className="relative z-50 rounded-full px-6 py-3 bg-red-600 text-white text-xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
              <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
                Learn More About Their Legacy
              </span>
              <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn More About Their Legacy
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Vision for New Bangladesh */}
      <motion.div
        className="container mx-auto text-center mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          A Vision for a New Bangladesh
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed mb-6 max-w-5xl mx-auto"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Building a better Bangladesh requires vision, unity, and commitment.
          Together, we can transform our nation into a hub of innovation,
          sustainability, and equality.
        </motion.p>

        {/* LayoutGridDemo with Animation */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <LayoutGridDemo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VictorySection;
