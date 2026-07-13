import React, { useEffect } from "react";
import { Educations } from "../constant";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import AOS from "aos"
import "aos/dist/aos.css"

const Education = () => {
    useEffect(() => {
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <div className="flex  flex-col w-full py-16 px-6 sm:px-10 lg:px-20 mb-8" id="Education">
      <h1 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wide text-white">
        Education
      </h1>
      <span className="text-center mt-2 text-gray-300">My Academic Background</span>
      <div className="sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6" data-aos="flip-up">
        {Educations.map((edu, index) => (
          <div key={index} >
            <div className=" p-6 rounded-xl bg-teal-700 text-white text-md mt-9 lg:mt-10 shadow-xl hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="flex items-center gap-3">
                  <RiGraduationCapFill size={24} />
                  <h2 className="font-semibold">{edu.course}</h2>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MdDateRange />
                  <span>{edu.date}</span>
                </div>
              </div>
              <span className="px-11 text-neutral-400">{edu.university}</span>
              <div className="px-11 text-neutral-400">{edu.college}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
