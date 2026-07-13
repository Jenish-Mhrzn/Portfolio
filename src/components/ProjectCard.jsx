import React, { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.isArray(project.image) ? project.image : [project.image];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!project.image) return null;

  return (
    <div className="p-6 bg-teal-700 rounded-xl text-white">
      <img
        src={images[currentIndex]}
        alt={project.title}
        className={project.type === "mobile" ? "w-40 h-72 object-contain mx-auto rounded-lg" :"rounded-lg mb-3"}
      />
    </div>
  );
};

export default ProjectCard;

