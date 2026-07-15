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
    <section className="flex flex-col py-5 px-5 md:min-h-[calc(100vh-80px)] md:justify-center items-center ">
      <div
        className=" max-w-7xl mx-auto px-6 flex flex-col-reverse items-center justify-between md:flex-row gap-8 lg:pl-20 "
        
      >
        {/* left */}
        <div className="md:w-1/2  ">
          <h1 className=" text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-white sm:text-center md:text-start">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-200 to-blue-400 text-transparent bg-clip-text">
              Jenish Maharjan
            </span>
          </h1>
          <p className="mt-4  text-gray-200 ">
            Enthusiastic and motivated Computer Science student passionate about
            building web and mobile applications. I enjoy solving real-world
            problems, learning new technologies, and creating user-friendly
            solutions. Currently seeking opportunities to contribute to
            real-world projects and grow as a software developer.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-7 ">
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
        {/* right */}
        <div className="md:w-1/2 flex justify-center ">
          <img
            src={me}
            alt=""
            className="rounded-3xl w-80 md:w-110 md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
