"use client"; // This directive makes the component a Client Component

import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-red-500 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
