import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import abusayed from '../../public/image/abusayed.jpg'; // Adjust the path as needed
import mughdho from '../../public/image/mugdho.jpg';
import shobuj from '../../public/image/shobuj.jpg';
import shanto from '../../public/image/shanto.jpg';
import jahiduzzamanTanvir from '../../public/image/jahiduzzamanTanvir.jpg';
import Freedom from '../../public/image/freedom.jpg';

const stories = [
  {
    slug: "the-unsung-hero",
    title: "The Unsung Hero",
    Name: "Abu Sayed",
    description: "A story of courage and sacrifice that changed the course of history.",
    image: abusayed,
    story: `Abu Sayed (Bengali: আবু সাঈদ; died 16 July 2024) was a Bangladeshi student activist...`,
  },
  {
    slug: "a-soldiers-legacy",
    title: "A Soldier's Legacy",
    Name: "Mir Mahfuzur Rahman Mugdho",
    description: "Remembering the bravery and dedication of a true warrior.",
    image: mughdho,
    story: `Mir Mahfuzur Rahman Mugdho (Bengali: মীর মাহফুজুর রহমান মুগ্ধ); 17 September 1998 - 18 July 2024)...`,
  },
  {
    slug: "the-final-stand",
    title: "The Final Stand",
    Name: "Jahiduzzaman Tanvir",
    description: "A tale of valor in the face of overwhelming odds.",
    image: jahiduzzamanTanvir,
    story: `Farhan Faiyaaz, a student of Dhaka Residential Model School and College, has been killed...`,
  },
  {
    slug: "the-braveheart",
    title: "The Braveheart",
    Name: "Shobuj Ali",
    description: "A remarkable account of bravery and resilience.",
    image: shobuj,
    story: `Shobuj Ali was killed in a clash between members of the Bangladesh Chhatra League (BCL)...`,
  },
  {
    slug: "echoes-of-valor",
    title: "Echoes of Valor",
    Name: "Md Faruk, Md Wasim, and Faisal Ahmed Shanto",
    description: "A tribute to the enduring spirit of the fallen heroes.",
    image: shanto,
    story: `Md Faruk, a pedestrian, was also killed during the clash in Chattogram's Muradpur...`,
  },
  {
    slug: "the-last-march",
    title: "The Last March",
    Name: "Freedom In the Air",
    description: "Honoring those who made the ultimate sacrifice.",
    image: Freedom,
    story: `The 2024 Bangladesh quota reform movement was an anti-government and pro-democracy protest...`,
  },
];

const StoriesSection = () => {
  return (
    <section id="stories" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Martyrs' Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <Link href={`/stories/${story.slug}`} key={index} passHref>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-sm mb-4">{story.description}</p>
                  <p className="text-sm italic text-gray-400">{story.Name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
