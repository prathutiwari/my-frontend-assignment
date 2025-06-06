"use client";

import React, { useState } from "react";
import Image from "next/image";
import card from "../assets/card.png"
import union from "../assets/Union.png"

const RightPanel = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <div className="flex flex-col gap-6 px-4 h-full">
            {/* Card 1: Toggle */}
            <div className="bg-[radial-gradient(141.22%_109.95%_at_-41.22%_109.95%,rgba(127,139,210,0.3)_0%,rgba(89,106,197,0)_100%),linear-gradient(0deg,#191934,#191934)] p-4 rounded-3xl shadow-md flex items-center justify-center h-[25%]">
  <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
    <input
      id="toggle"
      type="checkbox"
      className="sr-only peer"
      checked={darkMode}
      onChange={toggleDarkMode}
    />
    <div className="
  relative w-35 h-15 bg-[#2C2C44] rounded-full
  peer-focus:ring-2 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer dark:[#2C2C44]
  peer-checked:after:translate-x-[80px]
  after:content-[''] after:absolute after:top-0.4 after:left-0.5
  after:bg-[url('/assets/button.png')] after:bg-cover after:bg-center
  after:border-gray-300 after:rounded-full after:h-15 after:w-15 after:transition-transform
"></div>


  </label>
</div>


            {/* Card 2: 25M created prompts */}
            <div className="bg-[radial-gradient(141.22%_109.95%_at_-41.22%_109.95%,rgba(127,139,210,0.3)_0%,rgba(89,106,197,0)_100%),linear-gradient(0deg,#191934,#191934)]
  p-6 rounded-3xl shadow-md flex flex-col items-center justify-center text-center h-[25%] relative overflow-hidden">
  <h2 className="text-[62px] font-bold bg-gradient-to-r from-[#F5F1FF] to-[#6633EE] text-transparent bg-clip-text">
    25M
  </h2>
  <div className="flex items-center gap-2 relative bg-[linear-gradient(90deg,rgba(178,148,255,0.1)_0%,rgba(79,43,172,0.2)_100%)]">
    {/* Left Union Icon */}
    <Image
      src={union}
      alt="left-union"
      width={10}
      height={40}
      className="w-1 object-contain"
    />
    {/* Text */}
    <p className="text-xs uppercase tracking-wide text-purple-400">
      created prompts
    </p>
    {/* Right Union Icon */}
    <Image
      src={union}
      alt="right-union"
      width={10}
      height={40}
      className="w-1 object-contain"
    />
  </div>
</div>


            {/* Card 3: Prompt Service */}
            <Image
                src={card}
                alt="Branching Paths"
                className="object-cover rounded-3xl"
            />

        </div>
    );
};

export default RightPanel;
