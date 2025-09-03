// src/components/Internship.jsx
import React from "react";
import { Briefcase } from "lucide-react";

export default function Internship() {
  return (
    <section id="internship" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Floating Glow Shapes */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-cyan-400" size={28} />
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Internship Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Front-End Web Development Intern
              </h3>
              <p className="text-lg text-gray-200 font-semibold">
                IBM SkillsBuild & CSRBOX
              </p>
              <p className="text-sm text-gray-400 mt-2">Jun 2023 – Aug 2023</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills Developed */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-white mb-4">Key Skills Developed</h4>
                <p className="text-gray-300 leading-relaxed">
                  Gained hands-on experience with <span className="font-medium text-cyan-400">HTML, CSS, JavaScript, and React</span>, 
                  building responsive and interactive web applications.
                </p>
              </div>

              {/* Project Experience */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-white mb-4">Project Experience</h4>
                <p className="text-gray-300 leading-relaxed">
                  Worked on real-world projects focusing on <span className="font-medium text-pink-400">responsive UI/UX design</span> 
                  and modern web development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
