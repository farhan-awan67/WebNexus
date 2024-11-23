import React from 'react'
import serviceImg from "../assets/serviceimage.webp"

const Services = () => {
  return (
    <div className="p-2 my-[80px]">
      <h2 className="text-[45px] text-white font-bold mb-0 sm:mb-[55px] text-left sm:text-center leading-[45px] tracking-tight ">
        Our <span className="text-[#FF0080]">Services</span>
      </h2>
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row mt-5 gap-9 sm:gap-0">
        <div className="left text-white flex flex-col gap-3 w-full sm:basis-1/2">
          <h3 className="text-[35px] font-medium my-4 sm:my-0">UI/UX Design</h3>
          <p className="text-[16px] w-full sm:w-[84%]">
            Hands-on learning via real-life innovation projects. Save Rs 8,210
            On This Course. Create immersive UI via wireframes. Conduct
            heuristic evaluations of your UX design.
          </p>
          <div className="flex flex-col justify-start items-start gap-4 mt-3.5">
            <div className="flex justify-center items-center gap-3">
              <span className="bg-[#353535] rounded-full px-[7px] text-center py-[6px] flex justify-center items-center">
                <i className="fa-solid fa-check text-[#FD5900]"></i>
              </span>
              <p className="font-medium">User Interface Design</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="bg-[#353535] rounded-full px-[7px] text-center py-[6px] flex justify-center items-center">
                <i className="fa-solid fa-check text-[#FD5900]"></i>
              </span>
              <p className="font-medium">User Experience Design</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="bg-[#353535] rounded-full px-[7px] text-center py-[6px] flex justify-center items-center">
                <i className="fa-solid fa-check text-[#FD5900]"></i>
              </span>
              <p className="font-medium">Mobile Application Design</p>
            </div>
            <div className="border-[#6E6767] border-2 hover:bg-[#353535] py-3 px-3 cursor-pointer rounded-full">
              Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
        <div className="object-fit w-full sm:basis-1/2">
          <img src={serviceImg} alt="service-img" />
        </div>
      </div>
    </div>
  );
}

export default Services
