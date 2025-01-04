"use client";
import React from "react";
import { LayoutGrid } from "../../components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    (<div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>)
  );
}

const SkeletonOne = () => {
    return (
      <div className="cursor-pointer">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-green-500">
        Sustainability for Future Generations
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        Our commitment to sustainability will ensure a healthier, greener environment for future generations. Together, we can build a Bangladesh that thrives on eco-friendly practices and resource conservation.
        </p>
      </div>
    );
  };
  
  const SkeletonTwo = () => {
    return (
      <div className="cursor-pointer">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-green-500">
          Innovation at the Core
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Innovation will be the driving force behind Bangladesh's future. By nurturing creativity and embracing technological advancements, we can pave the way for a more prosperous tomorrow.
        </p>
      </div>
    );
  };
  
  const SkeletonThree = () => {
    return (
      <div className="cursor-pointer">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-green-500">
          Empowering Farmers for a Sustainable Future
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Farmers are the backbone of Bangladesh's economy. By providing them with modern tools, knowledge, and support, we can ensure sustainable agricultural growth and a brighter future for the nation.
        </p>
      </div>
    );
  };
  
  const SkeletonFour = () => {
    return (
      <div className="cursor-pointer">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-green-500">
          Equality for All
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Achieving equality for all citizens, regardless of their background, is key to a brighter future. We must work towards social justice and inclusive development to ensure that no one is left behind.
        </p>
      </div>
    );
  };
  

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/586089/pexels-photo-586089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/6257540/pexels-photo-6257540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
