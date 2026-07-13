import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative p-4 z-50 sm:px-10  ">
      <div className="flex justify-between  py-2 items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
          Portfolio
        </h1>

        <ul className="hidden sm:flex gap-2 md:gap-8 items-center text-lg cursor-pointer  text-white ">
          <li className="hover:bg-teal-600 px-3 py-2 rounded-xl">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-teal-600 px-3 py-2 rounded-xl">
            <a href="#Education">Education</a>
          </li>
          <li className="hover:bg-teal-600  px-3 py-2 rounded-xl">
            <a href="#Skills">Skills</a>
          </li>
          <li className="hover:bg-teal-600  px-3 py-2 rounded-xl">
            <a href="#Projects">Project</a>
          </li>
          <li className="px-3 py-2 rounded-xl  bg-teal-600 ">
            <a href="#Contact">Contact Me</a>
          </li>
        </ul>
        <button className="flex sm:hidden" onClick={toogleOpen}>
          <IoMenuSharp size={35} color="white" />
        </button>
      </div>

      <div
        className={`sm:hidden fixed top-0 right-0 h-screen w-[35%] bg-teal-700 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="flex justify-end w-full px-3 pt-6">
          <RxCross1 size={32} color="white" onClick={toogleOpen}  />
        </button>

        <ul className="flex flex-col gap-3 p-4 text-white">
          <li className="hover:bg-neutral-600 px-3 py-2 rounded-xl">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-neutral-600 px-3 py-2 rounded-xl">
            <a href="#Education">Education</a>
          </li>
          <li className="hover:bg-neutral-600 px-3 py-2 rounded-xl">
            <a href="#Skills">Skills</a>
          </li>
          <li className="hover:bg-neutral-600 px-3 py-2 rounded-xl">
            <a href="#Projects">Projects</a>
          </li>
          <li className="bg-blue-500 px-3 py-2 rounded-xl w-30">
            <a href="#Contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
