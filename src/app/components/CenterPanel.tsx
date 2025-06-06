"use client";

import React from "react";
import Image from "next/image";
import Sphere from "../assets/Sphere.png";
import leftCard from "../assets/left.png";
import rightCard from "../assets/right.png";
import bg from "../assets/bg.png";

const CenterPanel = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4 relative h-full">
      {/* Top Card with background and text */}
      <div className="relative w-full h-[50%] overflow-hidden flex items-baseline justify-center">
        <Image
          src={bg}
          alt="Top background"
          fill
          className=""
        />
        <h1 className="font-semibold text-[62px] leading-[40px] tracking-[-0.01em] text-white z-10 mt-[50px]">
          Template Ai
        </h1>
      </div>

      {/* Sphere overlapping the bottom */}
      <div className="absolute z-20 top-[34%]">
        <Image
          src={Sphere}
          alt="Sphere"
          width={230}
          height={230}
          className="shadow-lg"
        />
      </div>

      {/* Bottom Cards */}
      <div className="flex gap-4 w-full h-[50%] ">
        <div className="flex-1 relative rounded-3xl overflow-hidden">
          <Image
            src={rightCard}
            alt="Branching Paths"
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="flex-1 relative rounded-3xl overflow-hidden">
          <Image
            src={leftCard}
            alt="AI Journey"
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};


export default CenterPanel;
