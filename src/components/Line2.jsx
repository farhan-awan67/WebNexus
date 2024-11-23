import React from "react";

const Line2 = () => {
  return (
    <div className="bg-[#353535] py-4 border-[#636262] border-y-2 grid grid-cols-2 gap-4 sm:flex justify-evenly items-center text-white">
      <div className="text-center">
        <p className="font-bold text-[30px]">5M+</p>
        <p>Customers</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-[30px]">450M+</p>
        <p>Coverage</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-[30px]">22%</p>
        <p>Earnings</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-[30px]">8.03%</p>
        <p>Interest</p>
      </div>
    </div>
  );
};

export default Line2;
