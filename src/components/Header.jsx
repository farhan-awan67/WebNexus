import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between items-center bg-[#1E1E1E] px-4 py-4 sm:py-2 gap-5 text-white fixed top-0 left-0 w-full z-10">
      <h1 className="text-[30px] sm:text-[35px] font-semibold leading-tight tracking-tight cursor-pointer">
        WebNexus
      </h1>
      <div className="justify-between items-center hidden sm:flex gap-4 sm:gap-8">
        <a className="text-[17px] font-medium hover:text-[#FF0080]" href="#">
          Home
        </a>
        <a className="text-[17px] font-medium hover:text-[#FF0080]" href="#">
          Services
        </a>
        <a className="text-[17px] font-medium hover:text-[#FF0080]" href="#">
          About
        </a>
      </div>
      <h1 className="text-[18px] font-medium cursor-pointer hidden sm:block leading-none tracking-tight">
        REGISTER NOW <i className="fa-solid fa-arrow-right"></i>
      </h1>
      <button
        id="menu"
        onClick={() => setMenu(!menu)}
        className={`text-[24px] block sm:hidden ${
          menu ? "hidden" : "block"
        } cursor-pointer`}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <button
        id="close"
        onClick={() => setMenu(!menu)}
        className={`sm:hidden ${
          menu ? "block" : "hidden"
        } text-[24px] cursor-pointer`}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      {/* side abr */}
      <div
        className={`fixed left-0 gap-6 bg-gradient-to-b from-[#181818] to-[#333333] flex-col justify-center items-center w-full p-3 h-1/2 ${
          menu
            ? "flex top-[60px] opacity-100 transform" // Visible and at top 60px when menu is open
            : "top-[-100%] opacity-0 transform" // Out of view and hidden when menu is closed
        } sm:hidden transition-all duration-300 ease-in-out`}
      >
        <a className="text-[20px] font-normal hover:text-[#FF0080]" href="#">
          Home
        </a>
        <a className="text-[20px] font-normal hover:text-[#FF0080]" href="#">
          Services
        </a>
        <a className="text-[20px] font-normal hover:text-[#FF0080]" href="#">
          About
        </a>
        <h1 className="text-[17px] font-medium cursor-pointer sm:block">
          REGISTER NOW <i className="fa-solid fa-arrow-right"></i>
        </h1>
      </div>
    </div>
  );
};

export default Header;
