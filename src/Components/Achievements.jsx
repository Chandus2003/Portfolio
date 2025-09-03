// src/components/Achievements.jsx
import React from "react";
import { Award } from "lucide-react";

export default function Achievements() {
  const achievements = [
    "Led the team in Smart India Hackathon (Pre-Qualifier).",
    "Secured Top 10 position in Dexterix Hackathon.",
    "Solved 300+ DSA problems on GeeksforGeeks/LeetCode."
  ];

  return (
    <section id="achievements" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Floating Glow Shapes */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-pink-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Award className="text-cyan-400" size={28} />
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievements List */}
        <div className="max-w-3xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-700">
          <ul className="list-disc pl-6 space-y-4 text-gray-300 leading-relaxed">
            {achievements.map((ach, i) => (
              <li key={i} className="text-lg font-medium">{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
