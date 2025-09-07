// src/components/Projects.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "CRM Application",
      details: "Scalable CRM with role-based access, real-time WebSocket updates, and secure authentication.",
      stack: "Node.js, Express.js, MongoDB, React.js, Redux, WebSockets",
      color: "from-cyan-400 to-pink-500",
      github: "https://github.com/Chandus2003/CRM-Application-Frontend",
      demo: ""
    },
    {
      name: "Pokedex",
      details: "Search app that fetches Pokémon details with stats, type, and abilities.",
      stack: "React, PokeAPI",
      color: "from-pink-400 to-purple-500",
      github: "https://github.com/Chandus2003/Pockedex",
      demo: "https://pokedex-app-pokemon.netlify.app/"
    },
    {
      name: "Quiz App",
      details: "An interactive quiz app where users enter their name, attempt questions, and view results with scoring.",
      stack: "React.js, Tailwind CSS, Open Trivia API",
      color: "from-green-400 to-blue-500",
      github: "https://github.com/Chandus2003/Quiz-App",
      demo: "https://quiz-app-todaypay-assignment.netlify.app/ "
    },
    {
      name: "News Portal",
      details: "News app with category-based filtering using News API.",
      stack: "HTML, CSS, JavaScript",
      color: "from-purple-500 to-cyan-400",
      github: "https://github.com/Chandus2003/News_website",
      demo: ""
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Floating Glow Shapes (keep this top design) */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-500"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${proj.color}`}></div>

              {/* Card Body */}
              <div className="bg-gray-800/80 backdrop-blur-md p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed flex-1">
                  {proj.details}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-400 mb-1">Tech Stack:</p>
                  <p className="text-sm text-gray-200">{proj.stack}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
