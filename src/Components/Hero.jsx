import React, { useState, useEffect } from "react";
import { Linkedin, User } from "lucide-react";
import RRRRImage from "../assets/Profile.jpg";

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const text = 'Aspiring Full-Stack Developer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">

      {/* Dynamic glowing circles */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-pink-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-lg font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-white">
              Chandra <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Bhushan Sah</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6 h-10">
              {displayText}<span className="animate-pulse text-gray-500">|</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Passionate about designing scalable systems, building web apps with <span className="font-semibold text-cyan-300">React</span>, 
              <span className="font-semibold text-cyan-300"> Node.js</span>, and <span className="font-semibold text-cyan-300">MongoDB</span>, 
              creating impactful software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 text-white rounded-lg hover:scale-105 transition-transform duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </button>
              <a
                href="https://www.linkedin.com/in/chandra-bhushan-sah-77481b296/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Outer gradient border with glow */}
              <div className="w-80 h-80 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 shadow-xl flex items-center justify-center animate-pulse-slow">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <img
                    src={RRRRImage}
                    alt="Chandra Bhushan Sah"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="w-full h-full flex items-center justify-center bg-gray-700" style={{ display: 'none' }}>
                    <User size={80} className="text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400/20 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
