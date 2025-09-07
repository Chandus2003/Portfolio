import React from "react";
import { User, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Floating Glow Shapes */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <User className="text-cyan-400" />
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-700">
              <div className="h-2 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500"></div>
              <div className="p-8 bg-gray-800/80 backdrop-blur-md">
                <p className="text-lg text-gray-200 leading-relaxed">
                  I am a <span className="text-cyan-400 font-semibold">Computer Science & Engineering</span> student at 
                  <span className="text-pink-400 font-semibold"> Galgotias University</span> with a CGPA of 
                  <span className="text-purple-400 font-semibold"> 8.2</span>.  
                  I enjoy building modern web applications, exploring scalable architectures, and 
                  sharpening my problem-solving skills through Data Structures and Algorithms.
                </p>
              </div>
            </div>

            {/* Education Cards with Top Gradient Bar */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-700">
                <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <div className="p-4 flex items-center gap-3 bg-gray-800/80 backdrop-blur-md">
                  <BookOpen className="text-cyan-400" size={20} />
                  <div>
                    <p className="font-medium text-white">Intermediate (CBSE)</p>
                    <p className="text-gray-300">83%</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-700">
                <div className="h-2 bg-gradient-to-r from-pink-400 to-purple-500"></div>
                <div className="p-4 flex items-center gap-3 bg-gray-800/80 backdrop-blur-md">
                  <BookOpen className="text-pink-400" size={20} />
                  <div>
                    <p className="font-medium text-white">Matriculation (CBSE)</p>
                    <p className="text-gray-300">86%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Card with Top Design */}
          <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-700">
            <div className="h-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500"></div>
            <div className="p-8 bg-gray-800/80 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">University:</span>
                  <span className="font-semibold text-cyan-400">Galgotias University</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">CGPA:</span>
                  <span className="font-semibold text-pink-400">8.2</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 font-medium">Field:</span>
                  <span className="font-semibold text-purple-400">Computer Science & Engineering</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 font-medium">Focus:</span>
                  <span className="font-semibold text-green-400">Full-Stack Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
