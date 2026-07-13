import React, { useEffect } from "react";
import { Skill } from "../constant";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });

  //   const handleLoad = () => AOS.refresh();
  //   window.addEventListener("load", handleLoad);

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);
  return (
    <div className="w-full sm:py-16 px-6 sm:px-10 lg:px-20 mb-8 " id="Skills">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white">
        Skills
      </h1>

      <p className="text-center text-gray-300 mt-2">Tools and Technologies</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* data-aos="fade-left"> */}
        {Skill.map((category, index) => (
          <div
            key={index}
            className="bg-teal-700 rounded-xl p-6 text-white shadow-xl hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-teal-600 px-3 py-2 rounded-lg hover:bg-teal-500 transition"
                  >
                    <Icon size={20} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
