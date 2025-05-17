import React from "react";
import HeroSection from "../components/HeroSection";
import details from "../details/details";
import Collections from "../components/Collections";
import WelcomeBanner from "../components/Welcome";

function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-10">
      <WelcomeBanner/>
        <HeroSection />
        <Collections/>
        {/* <div className="flex p-4 justify-center items-center gap-10 m-9">
          <div>
            <img src="/moxie.png" className="rounded-[30px] shadow-lg shadow-pink-300 h-[500px]" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[60px]  font-bold">History</h2>
            <h2 className="text-[20px] ">{details.TITLE_DESCRIPTION}</h2>
          </div>
        </div>
        <div className="flex flex-row-reverse p-4 justify-center items-center gap-10 m-9">
          <div>
            <img src="/brawl.png" className="rounded-[30px] shadow-lg shadow-yellow-600 h-[500px]" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[60px]  font-bold">History</h2>
            <h2 className="text-[20px] ">{details.TITLE_DESCRIPTION}</h2>
          </div>
        </div>
        <div className="flex p-4 justify-center items-center gap-10 m-9">
          <div>
            <img src="/dice.png" className="rounded-[30px] shadow-lg shadow-blue-300 h-[500px]" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[60px]  font-bold">History</h2>
            <h2 className="text-[20px] ">{details.TITLE_DESCRIPTION}</h2>
          </div>
        </div> */}
        
        
        
        {/* <div className="h-screen flex flex-row">
        <div className="flex flex-col w-1/2 bg-red-600 font-playfair ">
        <h2 className="font-bold text-4xl">Matatu Culturev</h2>
          <h2 className="flex ">
            aiubasdkjbahgbsajkfwaigfkafffffffffffffffffffffffffffffffffffffffffffff</h2>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/cycology.png"
            alt="front-image"
            className="w-[600px] self-center"
          />
        </div>
      </div> */}
        {/* <section className=" ">
        <img src="/moxie-oppo.png" className="w-full h-screen object-cover sticky top-0"/>
      </section>
      <section className="">
        <img src="/upper-mat.png" className="w-full h-screen object-cover"/>
      </section> */}
      </div>
    </>
  );
}

export default HomePage;
