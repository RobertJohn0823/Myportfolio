import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="text-black-400 bg-cyan-900 body-font">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  )
}