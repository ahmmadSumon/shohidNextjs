import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import abusayed from '../../public/image/abusayed.jpg'; // Adjust the path as needed
import mughdho from '../../public/image/mugdho.jpg'; 
import shobuj from '../../public/image/shobuj.jpg'; 
import shanto from '../../public/image/shanto.jpg'; 
import jahiduzzamanTanvir from '../../public/image/jahiduzzamanTanvir.jpg'; 
import Freedom from '../../public/image/freedom.jpg'; 
import VictorySection from '../components/Victory';



const stories = [
  {
    slug: "the-unsung-hero",
    title: "The Unsung Hero",
    Name: "Abu Sayed",
    description: "A story of courage and sacrifice that changed the course of history.",
    image: abusayed,
    story:"Abu Sayed (Bengali: আবু সাঈদ; died 16 July 2024) was a Bangladeshi student activist who was shot dead by the Bangladesh Police on 16 July 2024,[3][4][5] while participating in the 2024 Bangladesh quota reform movement. Sayed was a student of Begum Rokeya University and was involved in the protest in front of the university when the police engaged in lathi charges and opened fire on the students. Abu Sayed grew up in Babanpur village of Pirganj Upazila of Rangpur, then part of Rajshahi Division. His father is Maqbul Hossain and his mother is Monowara Begum. He was the youngest of a family of six brothers and three sisters.[8] He won a talent pool scholarship from the local Junuder Para Government Primary School in the fifth grade. Later, he passed SSC with a Golden GPA-5 from Khalashpi Bimukhi High School. After completing SSC, he received a scholarship from the Babylon Group, called the Babylon Scholarship Program, to complete his college education. Then he passed HSC from Rangpur Government College with a GPA-5. Later he was admitted to the English department at Begum Rokeya University.[9] He was a 12th batch student of English Department of Begum Rokeya University.[10] On 16 July, between 2:30 and 3:00 pm, quota reform protesters and police clashed in front of Begum Rokeya University. Police fired tear gas and baton-charged to disperse protesting students. Most of the students left while Abu Sayed remained. The police were firing bullets from the opposite direction. Abu Sayed was subsequently shot four times by a police officer.[13] He died before being taken to hospital.The poet Shahidullah Faraji wrote a poem named after him called বীর আবু সায়েদ (lit. 'Hero Abu Sayed'), the hero of the generation, to the quota movement.[17] The name of Rangpur Park intersection was changed to Shaheed Abu Sayed Chatwar by the students in his honour.[18][19][20][21][22] Following the ouster of Prime Minister Sheikh Hasina and her government as a consequence of the protests, interim chief adviser Muhammad Yunus said that Sayed was in every persons heart in Bangladesh. Yunus later paid homage to Sayed at his grave in Rangpur on 10 August.[23]"
  },
  {
    slug: "a-soldiers-legacy",
    title: "A Soldier's Legacy",
    Name: "Mir Mahfuzur Rahman Mugdho",
    description: "Remembering the bravery and dedication of a true warrior.",

    image: mughdho,
     story:"Mir Mahfuzur Rahman Mugdho (Bengali: মীর মাহফুজুর রহমান মুগ্ধ); 17 September 1998 - 18 July 2024) was a Bangladeshi student, freelancer[1] and activist in the 2024 quota reform movement.[2][3][4] He was shot and killed while distributing food, water and biscuits during the protest.[5][6] Mugdho's death is remembered as an important event in the quota reform movement.[7][8]Mughdo was born one of twins, one minute after his brother Snigdho. He had an elder brother, Dipto. Mughdo's father was a health inspector from Brahmanbaria municipality.[2] As a child, he was a Bangladesh Scout.[2] He played football and was planning a trip around Bangladesh at the time of his death.[2]Mugdho obtained his Bachelors degree in Mathematics from Khulna University in 2023.[9] After that he began his MBA at Bangladesh University of Professionals (BUP), in Dhaka city. He was a freelancer, earning about $2,000-3,000 a month.[2]On Thursday 18 July 2024, Mugdho set out to distribute food and water to the protestors. His twin brother Snigdho was planning to come with him, but Mugdho asked him not to. He began distributing food and water at 4 pm. Mugdho's father was unaware of his son's activity in the protest.[2] In a video recorded fifteen minutes before his death, he is seen distributing water bottles and boxes of biscuits to protestors.[10] Mugdho was shot at 5 pm during clashes relating to the quota reform movement at Azampur intersection in Uttara. He was resting at the side of the road when he was shot.[2][11] The bullet entered through his forehead and exited through the right side of his head.[10] His body was brought to Uttara Crescent Hospital by his friend Ashiq. A doctor pronounced him dead upon arrival.[2] Snighdo was the first of Mughdo's family to learn of Mughdo's death and to see his brother's body.[10] The rest of his family, who were in Cox's Bazaar on holiday, learned of their son's death on Friday morning .[5] Mugdho's death was seen as a symbolic event in the quota reform movement and became a powerful symbol among the agitators.[12] Soon after his death, the video of him distributing water and biscuits, posted by his twin brother, went viral on social media.[5] Freelance marketplace Fiverr offered its condolences on social media for his death.[1] Then Education Minister Mohibul Hasan Chowdhury visited the home of Mughdo's family to express his sympathies.According to the Government of Bangladesh, 250 people have died in violence during the protest demanding quota reforms in government jobs in Bangladesh. However, according to local media, this number is more than 266 people.[13][14] Mugdho's death is one of the notable deaths that occurred during the movement and has created a lot of discussion in social and political circles.[15][16]"
  },
  {
    slug: "the-final-stand",
    title: "The Final Stand",
     Name: "Jahiduzzaman Tanvir",
    description: "A tale of valor in the face of overwhelming odds.",
    image: jahiduzzamanTanvir,
     story:"Farhan Faiyaaz, a student of Dhaka Residential Model School and College, has been killed following clashes between quota protesters and police in the Dhanmondi area of the capital. Farhan, 17, was reportedly brought dead to City Hospital in the capital on Thursday afternoon.Jul 18, 2024"
  },
  {
    slug: "the-braveheart",
    title: "The Braveheart",
     Name: "  Shobuj Ali",
    description: "A remarkable account of bravery and resilience.",
    image: shobuj,
     story:"Shobuj Ali was killed in a clash between members of the Bangladesh Chhatra League (BCL) and quota reform activists near Dhaka College. He was brought to the emergency department of Dhaka Medical College Hospital where the on-duty doctor declared him dead Shobuj, 25, was a student of the Department of Statistics of Dhaka College.The BCL has claimed that Shobuj was one of their workers and the organisation expressed deep sorrow over his death."
  },
  {
    slug: "echoes-of-valor",
    title: "Echoes of Valor",
     Name: "Md Faruk ,Md Wasim  and Faisal Ahmed Shanto",
    description: "A tribute to the enduring spirit of the fallen heroes.",
    image: shanto,
     story:"Md Faruk, a pedestrian, was also killed during the clash in Chattogram's Muradpur. Faruk, 32, was an employee of a furniture shop. Md Wasim Akram was killed during a clash between quota protesters and activists of Chhatra League and Jubo League in Chattogram's Muradpur. Wasim, 22, was a student of the Department of Sociology of Chittagong College. Shanto, 20, was a student of the Department of Management of Omargani M.E.S. College."
  },
  {
    slug: "the-last-march",
    title: "The Last March",
     Name: "Freedom In the Air",
    description: "Honoring those who made the ultimate sacrifice.",
    image: Freedom,
     story:"The 2024 Bangladesh quota reform movement was an anti-government[a] and pro-democracy[b] protest in Bangladesh, spearheaded primarily by university students. Initially focused on restructuring discriminatory traditional and quota-based systems for government job recruitment, the movement expanded against what many perceive as an authoritarian government when hundreds of protestors and civilians, most of whom were students, were killed.[c] The majority of the fatalities were caused by gunshots fired by the police and other government forces, using lethal and deadly weapons,[23] against unarmed protestors and non-protesting civilians, including children and pedestrians.[d]The protest began in June 2024, in response to the Supreme Court of Bangladesh reinstating a 30% quota for descendants of freedom fighters, reversing the government decision made in response to the 2018 Bangladesh quota reform movement. Students began to feel like they have a limited opportunity based on merit. The protest, which initially began as a response to the reestablished quota system for government jobs, quickly spread throughout the entire country because of the government's violent response, as well as growing public dissatisfaction against an oppressive government. The situation was further complicated by many other ongoing issues, like the government's inability to manage a prolonged economic downturn, reports of rampant corruption and human rights violations, and the absence of democratic channels for initiating changes.[28][29][30][31]The government sought to suppress the protests by shutting down all educational institutions. They deployed their student wing, the Chhatra League, along with other factions of the Awami League party, such as the Jubo League and the Swechasebak League. These groups resorted to using firearms and sharp weapons against the demonstrators.[e] The government then deployed Police, Rapid Action Battalion, border guards and Bangladesh Military, declaring a nationwide shoot-at-sight curfew[f] amid an unprecedented government-ordered nationwide internet and mobile connectivity blackout that effectively isolated Bangladesh from the rest of the world.[g] Later, the government also blocked social media in Bangladesh, including Facebook, TikTok, and WhatsApp.[40] As of August 2, there were confirmed 215 deaths and more than 20,000 others injured,[41][42] accompanied by more than 11,000 arrests in various parts of the country.[h] The unofficial death toll is between 300 and 500.[47] UNICEF reported that at least 32 children were killed during July's protests, with many more injured and detained.[48][49] Determining the exact number of deaths has been difficult because the government reportedly restricted hospitals from sharing information with the media without police permission, hospital CCTV footage was confiscated, and numerous individuals with gunshot wounds were buried without identification.[50][51][52]The Awami League government and Prime Minister Sheikh Hasina have suggested that political opponents have co-opted the protest.[53][54] As of August 2024, the movement remains ongoing as it has expanded its demands to include accountability for violence, a ban on the student wing of the government Chhatra League, and resignation of certain government officials,[55] including the resignation of Prime Minister Hasina.[56] The government's ongoing use of widespread violence against the general public has turned the student protest into a people's uprising known as the non-cooperation movement. The movement calls for nationwide civil disobedience and for Hasina and her cabinet to step down and take responsibility for the deaths. Despite this, the government denied that any protestors were killed by its security forces.[i]On 3 August, as a last resort to quell the protests, Sheikh Hasina proposed peaceful talks with the protesters, stating that her office was open and expressing a desire to sit with quota protesters and listen to them.However, central coordinator Nahid Islam announced that the protesters had no plans to negotiate with the government due to having endured torture while in police custody and having resorted to a hunger strike while detained by police and the Detective Branch. Asif Mahmud, another coordinator of the Anti-Discrimination Student Movement, stated, There is no dialogue with bullets and terrorism.[61] This marked the end of the movement.On 4 August, thousands of protesters convened at Dhaka's Shahbag intersection in the morning, obstructing it as a form of civil disobedience to demand the resignation of the government.[62] This was followed by hundreds of casualties.[63] On next day, the protesters called for the Long March to Dhaka in defiance of a nationwide curfew to press Sheikh Hasina to resign.[64]"
  },
];

const StoriesSection = () => {
  return (
    <section id="stories" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Martyrs' Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stories.map((story, index) => (
            <Link href={`/stories/${story.slug}`} key={index} passHref>
              <div
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl text-center text-red-500 font-semibold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {story.Name}
                  </h3>
                  <p className="text-gray-400">{story.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <VictorySection/>
    </section>
  );
};

export default StoriesSection;
