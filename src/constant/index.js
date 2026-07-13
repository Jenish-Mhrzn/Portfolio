export const Educations = [
  {
    course:
      "Bachelor of Science in Computer Science and Information Technology",
    college: "Asian College of Higher Studies",
    university: "Tribhuvan University (TU)",
    date: "2023-Present",
  },
  {
    course: "Higher Secondary (+2)",
    university: "NEB",
    college: "Bluebird College",
    date: "2021-2023",
  },
];

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiTailwindcss, SiExpo, SiRedux } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const Skill = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Mobile App Development",
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo },
      { name: "Expo Router", icon: SiExpo },
      { name: "REST API Integration", icon: TbApi },
      { name: "NativeWind", icon: SiTailwindcss },
    ],
  },
  {
    name: "Tools & IDEs",
    skills: [
      { name: "VS Code", icon: VscCode },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
  {
    name: "State Management",
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Redux", icon: SiRedux },
    ],
  },
];

import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project1_img1 from "../assets/project1_img1.jpg";
import project1_img2 from "../assets/project1_img2.jpg";
import project1_img3 from "../assets/project1_img3.jpg";
import project1_img4 from "../assets/project1_img4.jpg";
import project2_img1 from "../assets/project2_img1.jpg";
import project2_img2 from "../assets/project2_img2.jpg";
import project2_img3 from "../assets/project2_img3.jpg";
export const Projects = [
  {
    id: 1,
    title: "Cucina — Recipe App",
    type: "mobile",
    description:
      "A cross-platform recipe application built with React Native and Expo that lets users browse recipes by category and view detailed cooking instructions.",

    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "NativeWind",
      "TheMealDB API",
    ],

    features: [
      "600+ recipes",
      "14 food categories",
      "4 screens",
      "Expo Router navigation",
      "Fast image loading",
      "Android & iOS support",
    ],

    github: "https://github.com/Jenish-Mhrzn/React_Native_Project-RecipeApp",
    image: [project1_img1, project1_img2, project1_img3, project1_img4],
  },
  {
    id: 2,
    title: "Movie App",
    type: "mobile",
    description:
      "A cross-platform movie application built with React Native and Expo that allows users to discover trending movies, search for titles, and view detailed movie information using the TMDB API.",

    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "NativeWind",
      "TMDB API",
    ],

    features: [
      "Trending, popular, and upcoming movies",
      "Movie search",
      "Detailed movie information",
      "Expo Router navigation",
      "Optimized image loading",
      "Android & iOS support",
      "Cast and their details",
      "Similar movies",
    ],

    github: "https://github.com/Jenish-Mhrzn/React_Native_MovieApp",
    image: [project2_img1, project2_img2, project2_img3],
  },
  {
    id: 3,
    title: "React Estate Landing Page",
    type: "web",
    description:
      "A modern, responsive single-page real estate landing page built with React and Tailwind CSS featuring smooth navigation and a clean user interface.",

    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],

    features: [
      "Responsive design",
      "Single-page application (SPA)",
      "Smooth scrolling navigation",
      "Interactive mobile menu",
      "Property showcase",
      "Testimonials section",
      "Contact form",
    ],

    github: "https://github.com/Jenish-Mhrzn/React-Estate",
    image: project3,
  },
  {
    id: 4,
    title: "Fake Shop",
    type: "web",
    description:
      "A React-based e-commerce application that displays products from the Fake Store API. Users can browse products and view detailed information through a clean and responsive interface.",

    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "JavaScript",
      "Semantic UI React",
      "Fake Store API",
    ],

    features: [
      "Fetch products from the Fake Store API",
      "Browse product listings",
      "View detailed product information",
      "Global state management with Redux Toolkit",
      "Responsive UI using Semantic UI React",
    ],

    github: "https://github.com/Jenish-Mhrzn/react-redux-FakeShop",
    image: project4,
  },
];
