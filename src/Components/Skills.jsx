import React from "react";
import { Code, Database, BookOpen, Wrench } from "lucide-react";

export default function Skills() {
  const skills = {
    Languages: { items: ["Java", "JavaScript"], icon: Code, color: "from-cyan-400 to-blue-500" },
    Web: { items: ["HTML", "CSS", "React", "Node.js", "Express.js"], icon: Code, color: "from-pink-400 to-purple-500" },
    Database: { items: ["MongoDB"], icon: Database, color: "from-green-400 to-cyan-500" },
    Concepts: { items: ["DSA", "OOP", "REST APIs"], icon: BookOpen, color: "from-yellow-400 to-pink-500" },
    Tools: { items: ["Git", "GitHub", "VS Code"], icon: Wrench, color: "from-purple-400 to-cyan-500" },
  };

  return (
    <section id="skills" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Floating Glow Shapes */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items, icon: Icon, color }]) => (
            <div
              key={category}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-700"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${color}`}></div>

              {/* Card Content */}
              <div className="p-8 bg-gray-800/80 backdrop-blur-md">
                {/* Icon + Category */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
