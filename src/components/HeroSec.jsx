import React from "react";
import heroImg from "../assets/heroimage.webp";

const HeroSec = () => {
  return (
    <div className="py-[90px] text-white my-[15px]">
      <h2 className="tracking-widest text-5xl mt-2 md:text-6xl font-bold text-center mb-2">
        Web Design <br />
        <span className="text-[#FF0080]"> Agency.</span>
      </h2>
      <div className="w-full flex justify-between items-center flex-col md:flex-row gap-8 md:gap-[30px]">
        <div className="hero-card w-full md:basis-[25%] flex items-center justify-center flex-row gap-6 md:flex-col sm:items-start md:gap-6 order-1 md:order-none">
          <div className="card py-2 px-3 sm:p-5 border-2 flex justify-start items-center border-[#5E5E5E] bg-[#353535] rounded-[14px] min-w-[150px] min-h-[80px] sm:min-w-[176px] sm:min-h-[100px] text-left">
            <h3 className="text-[15px] sm:text-[20px]">
              <span className="font-semibold text-[18px] sm:text-[22px]">
                240+
              </span>{" "}
              <br />
              PARTNERS
            </h3>
          </div>
          <div className="card py-2 px-3 sm:p-5 flex justify-start items-center border-2 border-[#5E5E5E] bg-[#353535] rounded-[14px]  min-w-[150px] min-h-[80px] sm:min-w-[176px] sm:min-h-[100px] text-left">
            <h3 className="text-[15px] sm:text-[20px]">
              <span className="font-semibold text-[18px] sm:text-[22px]">
                92%
              </span>{" "}
              <br />
              FASTER TECH
            </h3>
          </div>
        </div>
        <div className="w-full md:basis-[50%] object-fit">
          <img className="" loading="lazy" src={heroImg} alt="hero img" />
        </div>
        <div className="w-full md:basis-[25%] order-2 md:order-none">
          <p className="text-[17px] w-full text-start leading-normal tracking-normal">
            Transforming your vision into stunning, responsive websites that
            captivate and convert.
          </p>
          <button className="bg-white text-black rounded-full p-3 mt-4 text-xs font-semibold hover:bg-gray-200 transition-colors duration-300">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
