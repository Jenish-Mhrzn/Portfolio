import React, { useEffect } from "react";
import profile from "../assets/profile.JPG";
import me from "../assets/me.jpg";
import Navbar from "./Navbar";
import { GoDownload } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });

  //   const handleLoad = () => AOS.refresh();
  //   window.addEventListener("load", handleLoad);

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);
  return (
    <div className="flex flex-col justify-center px-7 sm:px-10 lg:px-20 min-h-screen ">
      <Navbar />
      <div className="flex flex-1 flex-col-reverse  md:flex-row items-center justify-between gap-3 ">
        {/* data-aos="fade-left" */}
        <div className="sm:space-y-3  basis-[48%] text-left">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-200 to-blue-400 text-transparent bg-clip-text">
              Jenish Maharjan
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-gray-200 ">
            Enthusiastic and motivated Computer Science student passionate about
            building web and mobile applications. I enjoy solving real-world
            problems, learning new technologies, and creating user-friendly
            solutions. Currently seeking opportunities to contribute to
            real-world projects and grow as a software developer.
          </p>
          <div className="flex flex-wrap gap-4 mt-7">
            <a
              href="#Contact"
              className="bg-blue-500 px-4 py-2 rounded-full text-white"
            >
              Hire me
            </a>
            <a
              href="/CV.pdf"
              download
              className="bg-teal-700 px-4 py-2 rounded-full text-white flex gap-2 "
            >
              <GoDownload size={20} />
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-1 mb-2 md:mb-0 sm:mt-7 lg:mt-12 basis-[48%]">
          <img src={profile} className="w-full max-w-md mx-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
