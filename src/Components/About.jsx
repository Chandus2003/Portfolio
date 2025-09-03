import React from "react";
import { User, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Optional floating shapes for consistency */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <User className="text-cyan-400" />
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              I am a Computer Science & Engineering student at Galgotias University with a CGPA of 8.2.
              I enjoy building modern web applications, exploring scalable architectures, and 
              improving problem-solving skills through Data Structures and Algorithms.
            </p>
            
            {/* Education Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-400">
                <BookOpen className="text-cyan-400" size={20} />
                <div>
                  <p className="font-medium text-white">Intermediate (CBSE)</p>
                  <p className="text-gray-300">83%</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-pink-400">
                <BookOpen className="text-pink-400" size={20} />
                <div>
                  <p className="font-medium text-white">Matriculation (CBSE)</p>
                  <p className="text-gray-300">86%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300 font-medium">University:</span>
                <span className="font-semibold text-white">Galgotias University</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300 font-medium">CGPA:</span>
                <span className="font-semibold text-white">8.2</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-300 font-medium">Field:</span>
                <span className="font-semibold text-white">Computer Science & Engineering</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300 font-medium">Focus:</span>
                <span className="font-semibold text-white">Full-Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
