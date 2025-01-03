import Link from 'next/link';
import React from 'react';

const VictorySection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* Existing Victory Section */}
        <h2 className="text-4xl font-bold mb-6 text-red-500">
          Their Victory, Our Legacy
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          The martyrs who laid down their lives did so with courage and a deep commitment to justice. Their sacrifice is not in vain—it is a victory that echoes through time, inspiring generations to stand up for freedom and human dignity. The ultimate triumph of their spirit lives on in our hearts and actions.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Though they are no longer with us, their victory remains. It is seen in the ongoing struggle for truth, in the courage of those who continue to fight against oppression, and in the unity of people who stand together for a just cause. We honor their memory by carrying forward their legacy, ensuring that their sacrifices are never forgotten.
        </p>
        <p className="text-lg leading-relaxed">
          Let us remember, reflect, and reaffirm our commitment to the ideals for which they fought. Their victory is a beacon of hope, a reminder that even in the darkest times, the light of justice will prevail.
        </p>
        <div className="mt-10">
          <Link
            href="/stories"
            className="inline-block bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-red-500 transition duration-300"
          >
            Learn More About Their Legacy
          </Link>
        </div>
      </div>

      {/* New Section for Progress in New Bangladesh */}
      <div className="container mx-auto text-center mt-20">
        <h2 className="text-4xl font-bold mb-6 text-green-500">
          A Vision for a New Bangladesh
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Building a better Bangladesh requires vision, unity, and commitment. Together, we can transform our nation into a hub of innovation, sustainability, and equality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-image1.jpg"
              alt="Education"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Invest in Education</h3>
            <p className="text-sm">
              Empower the next generation with quality education and skill development programs to drive innovation and progress.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-image2.jpg"
              alt="Sustainability"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Sustainability</h3>
            <p className="text-sm">
              Embrace green energy and sustainable practices to protect our environment for future generations.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-image3.jpg"
              alt="Equality"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Foster Equality</h3>
            <p className="text-sm">
              Promote social justice, inclusivity, and equal opportunities for all citizens to build a harmonious society.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            href="/vision"
            className="inline-block bg-green-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-green-500 transition duration-300"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VictorySection;
