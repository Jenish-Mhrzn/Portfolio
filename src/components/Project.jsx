import React, { useEffect, useState } from "react";
import { Projects } from "../constant";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });

  //   const handleLoad = () => AOS.refresh();
  //   window.addEventListener("load", handleLoad);

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);
  return (
    <div
      className="flex flex-col sm:py-16 px-6 sm:px-10 lg:px-20 mb-8 "
      id="Projects"
    >
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
        Projects
      </h1>
      <span className="text-center mt-3 font-semibold text-gray-300">
        Projects I've Built{" "}
      </span>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* data-aos="fade-left" */}
        {Projects.map((Project, index) => (
          <div
            key={index}
            className=" p-6 sm:mt-9 bg-teal-700 text-white rounded-xl shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* <img src={Project.image} className="rounded-lg mb-3" alt="" /> */}
              <ProjectCard project={Project} />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-wide">
                {Project.title}
              </h1>
            </div>
            <div className="mt-3 mb-2">
              <span className=" text-gray-300 ">{Project.description}</span>
            </div>

            <h2 className="font-semibold">Technologies used</h2>
            <div className="flex flex-wrap gap-3 mt-2">
              {Project.technologies.map((Tech, index) => (
                <div
                  key={index}
                  className="rounded bg-teal-600 px-2 py-2 hover:bg-teal-500 "
                >
                  <span>{Tech}</span>
                </div>
              ))}
            </div>
            <h2 className="font-semibold mt-4">Features</h2>
            <div className="flex flex-col mt-2 space-y-2">
              {Project.features.map((feature, index) => (
                <div key={index}>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-row gap-2">
              <h2>Github:</h2>
              <a href={Project.github}>{Project.github}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
