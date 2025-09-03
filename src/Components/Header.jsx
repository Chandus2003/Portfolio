import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import resume from "../assets/Chandra_Bhushan_Sah.pdf"

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo (hidden on mobile) */}
          <div className="hidden md:block text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Chandra Bhushan
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Internship', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-200 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href={resume}
              download="Chandra_Bhushan_Sah_Resume.pdf"
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-200 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-xl mt-2 py-4 border border-gray-700">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Internship', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 text-gray-200 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <div className="px-6 pt-2">
              <a
                href={resume}
                download="Chandra_Bhushan_Sah_Resume.pdf"
                className="block w-full text-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
