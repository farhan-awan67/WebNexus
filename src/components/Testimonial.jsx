import React, { useEffect } from "react";
import clients from "../assets/clients";

const Testimonial = () => {
  return (
    <div className="p-2 my-[110px]">
      <h2 className="text-[45px] text-white font-bold text-left sm:text-center mb-[45px] leading-[45px] tracking-tight">
        Our Happy <span className="text-[#FF0080]">Customers</span>
      </h2>
      <div className="testimonial-sec">
        <div className="testimonials overflow-x-auto flex gap-6 py-4 scrollbar-hidden">
          {clients.map((client, idx) => {
            return (
              <div
                key={idx}
                className="testimonial min-w-[287px] min-h-[85px] flex flex-col gap-4 py-6 rounded-md border-2 border-[#5E5E5E] bg-[#353535] px-4 text-white"
              >
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full"
                    src={client.image}
                    alt="profile-img"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[22px]">{client.name}</h3>
                    <p className="text-[15px] text-[#7F848D]">
                      {client.subHed}
                    </p>
                  </div>
                </div>
                <p className="text-[18px] text-[#C7C7C7]">
                  {client.description}
                </p>
                <div className="flex gap-2">
                  <i className="fa-solid fa-star text-yellow-400 text-[18px]"></i>
                  <i className="fa-solid fa-star text-yellow-400 text-[18px]"></i>
                  <i className="fa-solid fa-star text-yellow-400 text-[18px]"></i>
                  <i className="fa-solid fa-star text-yellow-400 text-[18px]"></i>
                  <i className="fa-solid fa-star text-yellow-400 text-[18px]"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
