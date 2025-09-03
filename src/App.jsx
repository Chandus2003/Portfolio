import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Internship from "./components/Internship";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Internship />
      </main>
      <Footer />
    </div>
  );
}
