import React from "react";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-0">
        <div className="left flex flex-col gap-4 w-full sm:basis-1/2">
          <h3 className="foot-name text-[25px] font-semibold">WebNexus</h3>
          <p className="w-[80%] text-[#c5bcbc]">
            Cryptocurrency is a type of virtual currency that uses cryptography
            to secure transactions that are digitally recorded on a distributed
            ledger, such as a blockchain.
          </p>
          <div className="mt-4 flex items-center gap-6">
            <span className="bg-[#353535] rounded-full px-[11px] text-center py-[8px] flex justify-center items-center">
              <i className="fa-brands fa-facebook-f text-[#FD5900] text-[18px]"></i>
            </span>
            <span className="bg-[#353535] rounded-full px-[8px] text-center py-[8px] flex justify-center items-center">
              <i className="fa-brands fa-x-twitter text-[#FD5900] text-[18px]"></i>
            </span>
            <span className="bg-[#353535] rounded-full px-[11px] text-center py-[8px] flex justify-center items-center">
              <i className="fa-brands fa-instagram text-[#FD5900] text-[18px]"></i>
            </span>
            <span className="bg-[#353535] rounded-full px-[11px] text-center py-[8px] flex justify-center items-center">
              <i className="fa-brands fa-linkedin-in text-[#FD5900] text-[18px]"></i>
            </span>
          </div>
        </div>
        <div className="right w-full flex justify-between sm:basis-[430px] gap-12 sm:gap-0Name">
          <div className="flex flex-col gap-3">
            <h3 className="text-[18px] font-semibold">Useful Links</h3>
            <p className="text-[13px]">iOS Apps</p>
            <p className="text-[13px]">Contact Us</p>
            <p className="text-[13px]">Terms & Conditions</p>
            <p className="text-[13px]">Privacy</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[18px] font-semibold">Contact Us</h3>
            <p className="text-[13px]">+91 000000000</p>
            <p className="text-[13px]">hello@gmail.com</p>
            <p className="text-[13px]">Dgin St. Ceelina Delaware 10299</p>
          </div>
        </div>
      </div>
      <div className="copy-name bottom py-3 mt-6">
        <p className="text-center text-[14px]">
          All Rights Reserved © Farhan Awan 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
