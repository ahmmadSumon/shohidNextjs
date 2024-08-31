"use client";
import React from 'react';
import Image from 'next/image';

// Sample images (replace with your actual images)
import img1 from '../../public/image/img1.jpg';
import img2 from '../../public/image/img10.jpg';
import img3 from '../../public/image/img3.jpg';
import img4 from '../../public/image/img4.webp';
import img5 from '../../public/image/img5.webp';
import img6 from '../../public/image/img6.jpg';
import img7 from '../../public/image/img7.jpg';
import img8 from '../../public/image/img8.webp';
import img9 from '../../public/image/img9.jpg';
import img10 from '../../public/image/img11.jpg';

const AboutSection = () => {
  // Define the set of images to show
  const imagesToShow = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-500 text-center md:text-left tracking-wide">
            About the Bangladesh Quota Reform Movement
          </h2>
          <div className="text-lg leading-relaxed mb-8">
            <p className="mb-8">
              The 2024 Bangladesh quota reform movement was an anti-government and pro-democracy protest in Bangladesh, spearheaded primarily by university students. Initially focused on restructuring discriminatory traditional and quota-based systems for government job recruitment, the movement expanded against what many perceive as an authoritarian government when hundreds of protestors and civilians, most of whom were students, were killed. The majority of the fatalities were caused by gunshots fired by the police and other government forces, using lethal and deadly weapons, against unarmed protestors and non-protesting civilians, including children and pedestrians.
            </p>
            <p className="mb-8">
              The protest began in June 2024, in response to the Supreme Court of Bangladesh reinstating a 30% quota for descendants of freedom fighters, reversing the government decision made in response to the 2018 Bangladesh quota reform movement. Students began to feel like they have a limited opportunity based on merit. The protest, which initially began as a response to the reestablished quota system for government jobs, quickly spread throughout the entire country because of the government's violent response, as well as growing public dissatisfaction against an oppressive government. The situation was further complicated by many other ongoing issues, like the government's inability to manage a prolonged economic downturn, reports of rampant corruption and human rights violations, and the absence of democratic channels for initiating changes.
            </p>
            <p className="mb-8">
              The government sought to suppress the protests by shutting down all educational institutions. They deployed their student wing, the Chhatra League, along with other factions of the Awami League party, such as the Jubo League and the Swechasebak League. These groups resorted to using firearms and sharp weapons against the demonstrators. The government then deployed Police, Rapid Action Battalion, border guards and Bangladesh Military, declaring a nationwide shoot-at-sight curfew amid an unprecedented government-ordered nationwide internet and mobile connectivity blackout that effectively isolated Bangladesh from the rest of the world. Later, the government also blocked social media in Bangladesh, including Facebook, TikTok, and WhatsApp. As of August 2, there were confirmed 215 deaths and more than 20,000 others injured, accompanied by more than 11,000 arrests in various parts of the country. The unofficial death toll is between 300 and 500. UNICEF reported that at least 32 children were killed during July's protests, with many more injured and detained. Determining the exact number of deaths has been difficult because the government reportedly restricted hospitals from sharing information with the media without police permission, hospital CCTV footage was confiscated, and numerous individuals with gunshot wounds were buried without identification.
            </p>
            <p className="mb-8">
              The Awami League government and Prime Minister Sheikh Hasina have suggested that political opponents have co-opted the protest. As of August 2024, the movement remains ongoing as it has expanded its demands to include accountability for violence, a ban on the student wing of the government Chhatra League, and resignation of certain government officials, including the resignation of Prime Minister Hasina. The government's ongoing use of widespread violence against the general public has turned the student protest into a people's uprising known as the non-cooperation movement. The movement calls for nationwide civil disobedience and for Hasina and her cabinet to step down and take responsibility for the deaths. Despite this, the government denied that any protestors were killed by its security forces.
            </p>
            <p className="mb-8">
              On 3 August, as a last resort to quell the protests, Sheikh Hasina proposed peaceful talks with the protesters, stating that her office was open and expressing a desire to "sit with the quota protesters and listen to them." However, central coordinator Nahid Islam announced that the protesters had no plans to negotiate with the government due to having endured torture while in police custody and having resorted to a hunger strike while detained by police and the Detective Branch. Asif Mahmud, another coordinator of the Anti-Discrimination Student Movement, stated, "There is no dialogue with bullets and terrorism." This marked the end of the movement.
            </p>
            <p className="mb-8">
              On 4 August, thousands of protesters convened at Dhaka's Shahbag intersection in the morning, obstructing it as a form of civil disobedience to demand the resignation of the government. This was followed by hundreds of casualties. On next day, the protesters called for the Long March to Dhaka in defiance of a nationwide curfew to press Sheikh Hasina to resign.
            </p>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {imagesToShow.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={img}
                alt={`Protest Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0 grayscale"
                width={500} // Set a width for your images
                height={300} // Set a height for your images
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
