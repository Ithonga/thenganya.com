import React from "react";
import details from "../details/details";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row h-fit md:h-screen p-3 md:p-0">
      <div className="flex flex-col items-center justify-center md:gap-8 md:w-1/2 w-full mb-6 md:p-8">
        <h2 className="text-[40px] font-playfair font-bold mb-4 text-center md:text-left">
          {details.HERO_TITLE}
        </h2>
        <h2 className="text-[15px] md:text-[20px] text-center md:text-left">
          {details.TITLE_DESCRIPTION}
        </h2>
      </div>
      <div className="flex w-full md:w-1/2">
        <img
          src="/moxie-babayaga.png"
          className="md:hidden w-full  object-cover"
        />
        <img
          src="/background.webp"
          className="hidden md:block w-full  object-cover"
        />
      </div>
    </div>
  );
}

export default HeroSection;
