import React from "react";

const Line = () => {
  return (
    <div className="flex gap-3 justify-evenly sm:justify-around items-center transform -rotate-2 px-2 py-4 sm:gap-0 text-white border-y-2 border-[#5E5E5E] bg-[#353535] my-14">
      <p className="text-[20px] leading-tight tracking-tighter hidden">
        Website Design
      </p>
      <p>
        <i className="fa-solid fa-star text-yellow-400 hidden"></i>
      </p>
      <p className="text-[20px]">Dashboard</p>
      <p>
        <i className="fa-solid fa-star text-yellow-400"></i>
      </p>
      <p className="text-[20px] ">UI/UX</p>
      <p>
        <i className="fa-solid fa-star text-yellow-400 "></i>
      </p>
      <p className="text-[20px] hidden md:block">Development</p>
      <p>
        <i className="fa-solid fa-star hidden  md:block text-yellow-400"></i>
      </p>
      <p className="text-[20px] hidden  md:block">Strategy</p>
      <p>
        <i className="fa-solid fa-star text-yellow-400 hidden md:hidden lg:block"></i>
      </p>
      <p className="text-[20px] hidden md:hidden lg:block">NFT Art</p>
    </div>
  );
};

export default Line;
