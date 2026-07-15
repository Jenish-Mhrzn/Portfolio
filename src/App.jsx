import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-500">
        <ToastContainer />
        <Navbar/>
        <Hero />
        <Education />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
